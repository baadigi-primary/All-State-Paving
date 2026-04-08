import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              About Company
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gold" />
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {COMPANY.description}
            </p>
            <p className="text-sm">
              Open Monday to Saturday
              <br />
              {COMPANY.hours.weekdays}
            </p>
            <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors mt-3">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow Us on Facebook
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gold" />
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gold" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-gold transition-colors">
                    {COMPANY.phone}
                  </a>
                  <a href={`tel:${COMPANY.phoneAltTel}`} className="hover:text-gold transition-colors">
                    {COMPANY.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Sat: {COMPANY.hours.weekdays}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Useful Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gold" />
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>&copy; {new Date().getFullYear()} All State Paving. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a href="https://baadigi.com" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
              BaaDigi
            </a>{" "}
            — Digital Marketing Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
