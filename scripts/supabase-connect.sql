-- ========================================================================
-- One-shot script to connect All State Paving site to BaaDigi dashboard.
-- Run this in Supabase SQL Editor for project qywpuwwlnssaundtxisp.
--
-- What this does:
-- 1. Creates shared `site_blog_posts` + `site_gallery_images` tables (if missing)
-- 2. Migrates the 6 existing blog_posts for All State Paving → site_blog_posts
-- 3. Inserts the `integrations` row the dashboard's publish flow needs
--
-- BEFORE RUNNING: replace <CMS_SECRET> in Phase 3 with the actual secret
-- (same value set as CMS_SECRET env var on the site's Vercel project).
-- ========================================================================

-- ---- Phase 1: migration 015_site_blog_posts.sql ----
create table if not exists public.site_blog_posts (
  id uuid primary key default gen_random_uuid(),
  site_slug text not null,
  slug text not null,
  title text not null,
  excerpt text,
  body text,
  cover_image_url text,
  meta_title text,
  meta_description text,
  status text not null default 'published',
  published_at timestamptz,
  category text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (site_slug, slug)
);

create index if not exists site_blog_posts_site_pub_idx
  on public.site_blog_posts (site_slug, status, published_at desc);

create table if not exists public.site_gallery_images (
  id uuid primary key default gen_random_uuid(),
  site_slug text not null,
  src text not null,
  alt text,
  category text,
  sort_order int,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (site_slug, src)
);

create index if not exists site_gallery_images_site_idx
  on public.site_gallery_images (site_slug, category, sort_order);

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_site_blog_posts_updated on public.site_blog_posts;
create trigger trg_site_blog_posts_updated before update on public.site_blog_posts
  for each row execute function public.set_updated_at();

drop trigger if exists trg_site_gallery_images_updated on public.site_gallery_images;
create trigger trg_site_gallery_images_updated before update on public.site_gallery_images
  for each row execute function public.set_updated_at();

alter table public.site_blog_posts enable row level security;
alter table public.site_gallery_images enable row level security;

drop policy if exists "site_blog_posts read published" on public.site_blog_posts;
create policy "site_blog_posts read published" on public.site_blog_posts
  for select using (status = 'published');

drop policy if exists "site_gallery_images read all" on public.site_gallery_images;
create policy "site_gallery_images read all" on public.site_gallery_images
  for select using (true);


-- ---- Phase 2: migrate the 6 existing All State Paving posts ----
-- Copies from dashboard's `blog_posts` table (filtered by organization_id)
-- into the shared `site_blog_posts` table with site_slug='all-state-paving'.
-- Field mapping: content -> body, seo_title -> meta_title, seo_description -> meta_description.
-- Safe to re-run: ON CONFLICT (site_slug, slug) DO UPDATE.

insert into public.site_blog_posts (
  site_slug, slug, title, excerpt, body, cover_image_url,
  meta_title, meta_description, status, published_at, category
)
select
  'all-state-paving'     as site_slug,
  bp.slug,
  bp.title,
  bp.excerpt,
  bp.content             as body,
  bp.cover_image_url,
  bp.seo_title           as meta_title,
  bp.seo_description     as meta_description,
  bp.status,
  bp.published_at,
  bp.category
from public.blog_posts bp
where bp.organization_id = 'abb35dae-87b8-4217-bce9-35faf3a4b90d'
  and bp.status = 'published'
on conflict (site_slug, slug) do update set
  title            = excluded.title,
  excerpt          = excluded.excerpt,
  body             = excluded.body,
  cover_image_url  = excluded.cover_image_url,
  meta_title       = excluded.meta_title,
  meta_description = excluded.meta_description,
  status           = excluded.status,
  published_at     = excluded.published_at,
  category         = excluded.category;


-- ---- Phase 3: create CMS integration row ----
-- The dashboard's /api/sites/publish-post reads this to know where to push.
-- deploy_hook_url is left NULL for now — update it after creating the Vercel hook.
-- Uses DELETE + INSERT (don't rely on a unique constraint that may not exist).

delete from public.integrations
  where organization_id = 'abb35dae-87b8-4217-bce9-35faf3a4b90d'
    and provider = 'cms';

insert into public.integrations (organization_id, provider, is_active, config)
values (
  'abb35dae-87b8-4217-bce9-35faf3a4b90d',
  'cms',
  true,
  jsonb_build_object(
    'site_url',        'https://www.allstatepavenow.com',
    'cms_secret',      '<CMS_SECRET>',
    'deploy_hook_url', null,
    'site_slug',       'all-state-paving'
  )
);


-- ---- Verification ----
select 'site_blog_posts for all-state-paving' as check, count(*) as rows
  from public.site_blog_posts where site_slug = 'all-state-paving';

select 'integrations row' as check,
       organization_id,
       provider,
       is_active,
       config->>'site_url' as site_url,
       config->>'site_slug' as site_slug
  from public.integrations
  where organization_id = 'abb35dae-87b8-4217-bce9-35faf3a4b90d'
    and provider = 'cms';
