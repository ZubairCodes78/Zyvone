import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WAButton from "@/components/WAButton";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyvone.site"),
  alternates: {
    canonical: "/",
  },
  title: { default: "ZYVONE — We Build Systems. Not Services.", template: "%s — ZYVONE" },
  description: "ZYVONE is a premium digital company building AI automation, web systems, and brand experiences for founders. Based in Pakistan. Built for the world.",
  keywords: ["AI automation", "web development", "brand experience", "digital agency", "Pakistan", "systems", "automation", "SaaS", "custom software", "business automation"],
  authors: [{ name: "ZYVONE", url: "https://zyvone.site" }],
  creator: "ZYVONE",
  publisher: "ZYVONE",
  category: "Technology",
  openGraph: {
    type: "website",
    url: "https://zyvone.site",
    siteName: "ZYVONE",
    title: "ZYVONE — We Build Systems. Not Services.",
    description: "Premium digital company. AI automation, web development, brand experience.",
    images: [
      {
        url: 'https://zyvone.site/og-image',
        width: 1200,
        height: 630,
        alt: 'ZYVONE — We Build Systems. Not Services.',
        type: 'image/png',
      }
    ],
    locale: "en_US",
    countryName: "Pakistan",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zyvone",
    creator: "@zyvone",
    images: ['https://zyvone.site/og-image'],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#060B18",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZYVONE",
    url: "https://zyvone.site",
    logo: "https://zyvone.site/favicon.png",
    description: "ZYVONE is a premium digital company building AI automation, web systems, and brand experiences for founders. Based in Pakistan. Built for the world.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92 316 7697273",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://twitter.com/zyvone",
      "https://linkedin.com/company/zyvone",
    ],
  };

  return (
    <html lang="en" className={`${space.variable} ${instrument.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
        <WAButton />
      </body>
    </html>
  );
}
