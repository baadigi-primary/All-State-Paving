import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-navy py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/images/hero-bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {breadcrumbs && (
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gold">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
