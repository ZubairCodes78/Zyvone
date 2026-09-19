import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story — The Evolution of ZYVONE | Systems-First Digital Studio',
  description: 'How two founders evolved from freelancing to engineering production software, SaaS platforms, and AI systems that power modern businesses.',
  alternates: {
    canonical: 'https://zyvone.site/story',
  },
  openGraph: {
    title: 'Our Story — The Evolution of ZYVONE | Systems-First Digital Studio',
    description: 'How two founders evolved from freelancing to engineering production software, SaaS platforms, and AI systems that power modern businesses.',
    url: 'https://zyvone.site/story',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The ZYVONE Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story — The Evolution of ZYVONE | Systems-First Digital Studio',
    description: 'How two founders evolved from freelancing to engineering production software, SaaS platforms, and AI systems that power modern businesses.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
