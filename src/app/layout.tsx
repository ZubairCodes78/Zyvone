import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAButton from "@/components/WAButton";
import CaseStudyModal from "@/components/CaseStudyModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zyvone.site"),
  alternates: {
    canonical: "https://zyvone.site",
  },
  title: { default: "ZYVONE — We build systems. Not deliverables.", template: "%s — ZYVONE" },
  description: "ZYVONE is a digital product studio engineering software systems, web platforms, and automated infrastructure for founders. We build systems. Not deliverables.",
  keywords: ["systems", "software engineering", "digital product studio", "AI automation", "web development", "Pakistan", "SaaS infrastructure"],
  authors: [{ name: "ZYVONE", url: "https://zyvone.site" }],
  creator: "ZYVONE",
  publisher: "ZYVONE",
  openGraph: {
    type: "website",
    url: "https://zyvone.site",
    siteName: "ZYVONE",
    title: "ZYVONE — We build systems. Not deliverables.",
    description: "ZYVONE is a digital product studio engineering software systems, web platforms, and automated infrastructure.",
    images: [
      {
        url: "https://zyvone.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZYVONE — We build systems. Not deliverables.",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zyvone12",
    creator: "@zyvone12",
    images: ["https://zyvone.site/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
    google: "google442de89fc977bfee",
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
    description: "ZYVONE is a digital product studio engineering software systems, web platforms, and automated infrastructure. We build systems. Not deliverables.",
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
      "https://x.com/zyvone12",
      "https://www.linkedin.com/in/zyvone-limited/",
      "https://www.instagram.com/zyvone.official/",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--bg)] text-[var(--text-primary)]" suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <WAButton />
        <CaseStudyModal />
      </body>
    </html>
  );
}
