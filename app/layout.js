import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Structured data for organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rent Press",
  "url": "https://rent-press.com",
  "logo": "https://rent-press.com/assets/logo-no-background.png",
  "description": "Professional websites for Rent-to-Rent landlords",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UK"
  },
  "sameAs": []
};

export const metadata = {
  title: "Rent Press | Professional Websites for Rent-to-Rent Landlords",
  description: "Create a professional website for your rent-to-rent property business with our built-in CMS, SEO blog, and admin dashboard.",
  keywords: "rent to rent, R2R, property website, landlord website, property management, real estate website",
  openGraph: {
    title: "Rent Press | Professional Websites for R2R Landlords",
    description: "Boost your rent-to-rent business with a professional website",
    url: "https://rent-press.com",
    siteName: "Rent Press",
    images: [
      {
        url: "https://rent-press.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className="scroll-smooth">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
