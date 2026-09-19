import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selected Work & Software Case Studies | ZYVONE',
  description: 'Explore production digital products, SaaS platforms, AI systems, automation infrastructure, and custom software engineered by ZYVONE.',
  alternates: {
    canonical: 'https://zyvone.site/work',
  },
  openGraph: {
    title: 'Selected Work & Software Case Studies | ZYVONE',
    description: 'Explore production digital products, SaaS platforms, AI systems, automation infrastructure, and custom software engineered by ZYVONE.',
    url: 'https://zyvone.site/work',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZYVONE Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Work & Software Case Studies | ZYVONE',
    description: 'Explore production digital products, SaaS platforms, AI systems, automation infrastructure, and custom software engineered by ZYVONE.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
