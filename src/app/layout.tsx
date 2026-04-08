import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY, SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "All State Paving | Asphalt Paving Services in Central Ohio",
    template: "%s | All State Paving",
  },
  description:
    "Asphalt paving services for Central Ohio homes and businesses. New installation, repair, resurfacing, and sealcoating. Serving Delaware and Central Ohio since 1979.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "All State Paving",
    url: SITE_URL,
    title: "All State Paving | Asphalt Paving Services in Central Ohio",
    description:
      "Professional asphalt paving, repair, and resurfacing for residential and commercial properties. Family-owned since 1979, serving Central Ohio.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "All State Paving — Central Ohio Asphalt Paving Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All State Paving | Asphalt Paving Services in Central Ohio",
    description:
      "Professional asphalt paving, repair, and resurfacing for residential and commercial properties. Serving Central Ohio since 1979.",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "3pT6QgjoFindQT9MkWPRc98vGsvavQWP5IZCeXZd1jo",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [
    COMPANY.facebook,
    "https://www.homeadvisor.com/rated.Allstatepaving.137694223.html",
    "https://www.angi.com/companylist/us/de/bear/allstate-paving-reviews-1.htm",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phoneTel,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-default.jpg`,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "175 South Sandusky St, Suite 398",
    addressLocality: "Delaware",
    addressRegion: "OH",
    postalCode: "43015",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2987,
    longitude: -83.068,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "19:30",
    },
  ],
  priceRange: "$$",
  areaServed: COMPANY.areas.map((area) => ({
    "@type": "City",
    name: `${area}, Ohio`,
  })),
  sameAs: [
    COMPANY.facebook,
    "https://www.homeadvisor.com/rated.Allstatepaving.137694223.html",
    "https://www.angi.com/companylist/us/de/bear/allstate-paving-reviews-1.htm",
  ],
  foundingDate: "1979",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1800",
    bestRating: "5",
  },
  description: COMPANY.description,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-206Y1QGMS5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-206Y1QGMS5');
          `}
        </Script>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
