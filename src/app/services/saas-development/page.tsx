import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'SaaS Development Company & Cloud Platform Engineering',
  description:
    'ZYVONE architects scalable SaaS products, multi-tenant cloud platforms, subscription billing, and production-ready web applications for tech startups and enterprises.',
  alternates: {
    canonical: 'https://zyvone.site/services/saas-development',
  },
}

export default function SaaSDevelopmentPage() {
  const related = projects.filter((p) =>
    ['pdfmaster', 'toolmatic', 'wearomnia'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="saas-development"
      title="SaaS Development"
      eyebrow="ENGINEERING DISCIPLINE 02"
      subtitle="End-to-end SaaS engineering: multi-tenant architecture, automated subscription billing, user role management, and scalable cloud infrastructure."
      overview="ZYVONE builds commercial Software-as-a-Service platforms engineered for reliability, security, and exponential user growth. From initial data schema design to edge-computed client features, we engineer SaaS products that compound."
      problems={[
        {
          problem: 'Fragile monolithic codebases that stall product iteration and break under multi-tenant user loads.',
          solution: 'Modular microservice and edge-first architecture with isolated tenant data schemas and automated deployment pipelines.',
        },
        {
          problem: 'High infrastructure overhead that eats operating margins before achieving product-market fit.',
          solution: 'Serverless and edge computing patterns (Vercel Edge, WASM, Web Workers) that minimize cloud compute bills.',
        },
      ]}
      capabilities={[
        {
          title: 'Multi-Tenant Architecture',
          desc: 'Secure tenant isolation, role-based access control (RBAC), and multi-org management.',
        },
        {
          title: 'Automated Billing & Gateways',
          desc: 'Stripe, LemonSqueezy, and localized payment gateway integration with webhooks.',
        },
        {
          title: 'Client-Side Edge Utilities',
          desc: 'WebAssembly and Web Worker pipelines for zero-server-cost in-browser data processing.',
        },
        {
          title: 'Real-Time Telemetry & Analytics',
          desc: 'User activity tracking, performance monitoring, and usage-based billing metering.',
        },
      ]}
      technologies={['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe API', 'WebAssembly', 'Web Workers']}
      relatedProjects={related}
    />
  )
}
