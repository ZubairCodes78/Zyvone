import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an Engineering Discovery & Systems Audit Call | ZYVONE',
  description: 'Schedule a focused 30-minute technical architecture and systems audit session with ZYVONE. Uncover operational bottlenecks and map high-leverage software solutions.',
  alternates: {
    canonical: 'https://zyvone.site/book-call',
  },
  openGraph: {
    title: 'Book an Engineering Discovery & Systems Audit Call | ZYVONE',
    description: 'Schedule a focused 30-minute technical architecture and systems audit session with ZYVONE. Uncover operational bottlenecks and map high-leverage software solutions.',
    url: 'https://zyvone.site/book-call',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Book an Engineering Discovery Call with ZYVONE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book an Engineering Discovery & Systems Audit Call | ZYVONE',
    description: 'Schedule a focused 30-minute technical architecture and systems audit session with ZYVONE. Uncover operational bottlenecks and map high-leverage software solutions.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function BookCallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
