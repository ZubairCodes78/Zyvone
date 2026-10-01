import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAButton from "@/components/WAButton";
import CaseStudyModal from "@/components/CaseStudyModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
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
  title: {
    default: "ZYVONE — Digital Product Studio | Software, SaaS & AI Development",
    template: "%s — ZYVONE",
  },
  description:
    "ZYVONE is a digital product studio and software technology company building SaaS products, web applications, AI systems, and automated infrastructure for ambitious founders and enterprises.",
  keywords: [
    "ZYVONE",
    "web development agency",
    "software development company",
    "SaaS development company",
    "SaaS MVP development",
    "AI development agency",
    "AI automation agency",
    "custom software development",
    "digital product studio",
    "software house Pakistan",
  ],
  authors: [{ name: "ZYVONE", url: "https://zyvone.site" }],
  creator: "ZYVONE",
  publisher: "ZYVONE",
  openGraph: {
    type: "website",
    url: "https://zyvone.site",
    siteName: "ZYVONE",
    title: "ZYVONE — Digital Product Studio | Software, SaaS & AI Development",
    description:
      "ZYVONE is a digital product studio and software technology company building SaaS products, web applications, AI systems, and automated infrastructure.",
    images: [
      {
        url: "https://zyvone.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZYVONE — Digital Product Studio | Software, SaaS & AI Development",
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
    "@id": "https://zyvone.site/#organization",
    name: "ZYVONE",
    url: "https://zyvone.site",
    logo: "https://zyvone.site/favicon.png",
    description:
      "ZYVONE is a digital product studio and software technology company building SaaS products, web applications, AI systems, and automated infrastructure.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92 316 7697273",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://x.com/zyvone12",
      "https://www.linkedin.com/company/zyvonetech/posts/?feedView=all",
      "https://www.instagram.com/zyvone.official/",
      "https://www.facebook.com/profile.php?id=61594944182257",
    ],
    knowsAbout: [
      "SaaS Development",
      "AI Systems",
      "AI Agents",
      "Custom Software Development",
      "Web Applications",
      "Business Automation",
      "Next.js App Router",
      "Cloud Architecture",
    ],
    founder: [
      {
        "@type": "Person",
        "@id": "https://zyvone.site/#zubair",
        name: "Muhammad Zubair",
        jobTitle: "Founder, ZYVONE | Full-Stack SaaS & AI Developer",
        sameAs: [
          "https://www.instagram.com/zubair.zyvone/",
          "https://www.linkedin.com/in/zubair-zyvone/",
          "https://x.com/ZubairAttari37",
          "https://github.com/ZubairCodes78",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://zyvone.site/#hashir",
        name: "Hashir Ahmad",
        jobTitle: "Co-Founder, ZYVONE | Marketing Strategist & Web Developer",
        sameAs: [
          "https://www.instagram.com/co.founder.zyvone/",
          "https://x.com/HashirAhmad327",
          "https://www.linkedin.com/in/hashir-ahmad327/",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
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
