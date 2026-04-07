"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-sm gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-2">
              <MapIcon />
              <span className="hidden sm:inline">{COMPANY.address}</span>
              <span className="sm:hidden">Delaware, OH</span>
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon />
              <span>Mon-Sat: {COMPANY.hours.weekdays}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <PhoneIcon />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-20" : "h-36"}`}>
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/All State Paving logo.png"
              alt="All State Paving"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-16" : "h-32"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => "children" in link ? setOpenDropdown(link.label) : undefined}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm transition-colors ${pathname === link.href || pathname.startsWith(link.href + "/") ? "text-navy font-bold" : "text-gray-700 hover:text-navy font-medium"}`}
                >
                  {link.label}
                  {"children" in link && (
                    <svg className="w-3 h-3 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {"children" in link && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50 border border-gray-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-5 py-2.5 rounded text-sm transition-colors"
            >
              GET A QUOTE
            </Link>
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 ${pathname === link.href || pathname.startsWith(link.href + "/") ? "text-navy font-bold" : "text-gray-700 hover:text-navy font-medium"}`}
                  onClick={() => {
                    if (!("children" in link)) setMobileOpen(false);
                  }}
                >
                  {link.label}
                </Link>
                {"children" in link && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-500 hover:text-navy"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block bg-gold text-navy font-bold px-4 py-2.5 rounded text-center mt-3"
              onClick={() => setMobileOpen(false)}
            >
              GET A QUOTE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
