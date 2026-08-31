import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'E-Commerce Development Agency & D2C Commerce Platforms',
  description:
    'ZYVONE builds direct-to-consumer (D2C) commerce flagships, wholesale trade portals, friction-free guest checkout, and automated COD dispatch logistics.',
  alternates: {
    canonical: 'https://zyvone.site/services/ecommerce-development',
  },
}

export default function EcommerceDevelopmentPage() {
  const related = projects.filter((p) =>
    ['wearomnia', 'amin-raisat-hosiery'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="ecommerce-development"
      title="E-Commerce Development"
      eyebrow="ENGINEERING DISCIPLINE 08"
      subtitle="Luxury D2C fashion storefronts, B2B wholesale trade portals, sub-100ms product catalog browsing, and automated logistics."
      overview="E-commerce success is built on friction removal. ZYVONE engineers custom e-commerce flagships and B2B trade portals designed to maximize average order value (AOV), eliminate checkout dropoff, and automate order fulfillment."
      problems={[
        {
          problem: 'Slow e-commerce storefronts loaded with 50+ third-party apps causing 4-second mobile page loads and abandoned carts.',
          solution: 'Custom Next.js commerce architecture achieving sub-1-second mobile page speed ratings and zero checkout friction.',
        },
        {
          problem: 'Manual social commerce friction relying on manual DM responses, lost sizing inquiries, and unverified COD orders.',
          solution: 'Automated guest checkout with instant WhatsApp sizing consultations and automated Cash on Delivery confirmation.',
        },
      ]}
      capabilities={[
        {
          title: 'Direct-to-Consumer (D2C) Flagships',
          desc: 'High-fashion editorial visual design, dynamic collection filters, and lightning-fast product pages.',
        },
        {
          title: 'Hybrid B2B Wholesale Portals',
          desc: 'Tiered volume pricing, bulk order matrix selectors, and digital quotation workflows.',
        },
        {
          title: 'Automated COD & Order Routing',
          desc: 'Nationwide Cash on Delivery automated SMS/WhatsApp verification and courier dispatch integration.',
        },
        {
          title: 'Variant & Sizing Architecture',
          desc: 'Multi-variant size selectors, real-time inventory tracking, and conversational fit advice.',
        },
      ]}
      technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Node.js', 'WhatsApp API', 'Vercel Edge']}
      relatedProjects={related}
    />
  )
}
