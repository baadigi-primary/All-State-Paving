import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-navy mb-6">
          We couldn&apos;t find that page
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on a paved road — try one of the links below or
          call us for a free estimate.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/"
            className="bg-navy hover:bg-navy/90 text-white font-bold px-8 py-3 rounded transition-colors"
          >
            BACK TO HOME
          </Link>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3 rounded transition-colors"
          >
            CALL {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-3 rounded transition-colors"
          >
            GET A QUOTE
          </Link>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-left">
          <h2 className="text-lg font-bold text-navy mb-4">Popular Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-gray-600 hover:text-navy text-sm transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/areas-served"
            className="text-gold font-semibold text-sm mt-4 inline-block hover:underline"
          >
            View Areas We Serve →
          </Link>
        </div>
      </div>
    </section>
  );
}
