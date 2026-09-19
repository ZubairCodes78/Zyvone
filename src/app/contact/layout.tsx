import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start a Project — Work With ZYVONE | Digital Product Studio',
  description: 'Discuss your project directly with our technical founders. We engineer custom SaaS, AI automation pipelines, web applications, and internal tools.',
  alternates: {
    canonical: 'https://zyvone.site/contact',
  },
  openGraph: {
    title: 'Start a Project — Work With ZYVONE | Digital Product Studio',
    description: 'Discuss your project directly with our technical founders. We engineer custom SaaS, AI automation pipelines, web applications, and internal tools.',
    url: 'https://zyvone.site/contact',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact ZYVONE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project — Work With ZYVONE | Digital Product Studio',
    description: 'Discuss your project directly with our technical founders. We engineer custom SaaS, AI automation pipelines, web applications, and internal tools.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
