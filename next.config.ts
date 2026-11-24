import type { NextConfig } from "next";

// Ohio blog posts rewritten for Gainesville, FL (2026-11-23). Old slug -> new slug.
const BLOG_REDIRECTS: [string, string][] = [
  ["asphalt-patching-ohio", "asphalt-patching-gainesville-fl"],
  ["asphalt-driveway-thickness-ohio", "asphalt-driveway-thickness-florida"],
  ["asphalt-overlay-cost-central-ohio", "asphalt-overlay-gainesville-fl"],
  ["asphalt-vs-concrete-driveway-ohio", "asphalt-vs-concrete-driveway-florida"],
  ["parking-lot-paving-cost-central-ohio", "parking-lot-paving-cost-gainesville-fl"],
  ["asphalt-paving-cost-delaware-ohio", "asphalt-paving-gainesville-fl"],
  ["best-time-to-pave-asphalt-ohio", "best-time-to-pave-asphalt-florida"],
  ["how-often-to-sealcoat-asphalt-ohio", "how-often-to-sealcoat-asphalt-florida"],
  ["private-road-paving-guide-ohio", "private-road-paving-guide-florida"],
  ["ada-parking-lot-striping-ohio", "ada-parking-lot-striping-florida"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return BLOG_REDIRECTS.map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      statusCode: 301 as const,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "media-src 'self'",
              "font-src 'self' data:",
              "connect-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://*.supabase.co https://challenges.cloudflare.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://challenges.cloudflare.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
      // Agent discovery (RFC 8288 Link) on the homepage. Keep LAST: for the same header key the later rule wins.
      { source: "/", headers: [{ key: "Link", value: "</.well-known/api-catalog>; rel=\"api-catalog\", </.well-known/ai-plugin.json>; rel=\"service-desc\", </ai-bot.md>; rel=\"service-doc\", </llms.txt>; rel=\"describedby\", </auth.md>; rel=\"https://auth.md/rel\", </.well-known/mcp/server-card.json>; rel=\"https://modelcontextprotocol.io/rel/server-card\", </.well-known/oauth-protected-resource>; rel=\"oauth-protected-resource\"" }] },
    ];
  },
};

export default nextConfig;
