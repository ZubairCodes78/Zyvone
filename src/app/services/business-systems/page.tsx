import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Business Systems Engineering & Internal Tools Agency',
  description:
    'ZYVONE engineers internal operations software, custom CRM portals, clinical management systems, and automated operational dashboards.',
  alternates: {
    canonical: 'https://zyvone.site/services/business-systems',
  },
}

export default function BusinessSystemsPage() {
  const related = projects.filter((p) =>
    ['cantt-dental-care', 'al-raheem-engineering', 'amin-raisat-hosiery'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="business-systems"
      title="Business Systems"
      eyebrow="ENGINEERING DISCIPLINE 07"
      subtitle="Custom operational dashboards, internal admin portals, clinical intake systems, and automated B2B procurement pipelines."
      overview="Great businesses are not run on chaotic WhatsApp groups and manual spreadsheets. ZYVONE builds internal business systems that organize company data, streamline operational workflows, and automate recurring admin tasks."
      problems={[
        {
          problem: 'Operational chaos where customer orders, patient inquiries, or trade quotes slip through email cracks.',
          solution: 'Centralized administrative dashboards with automated status tracking, notification alerts, and role permissions.',
        },
        {
          problem: 'Zero operational visibility into daily throughput, lead conversion rates, or employee task completion.',
          solution: 'Real-time telemetry and reporting interfaces built directly on top of single-source-of-truth databases.',
        },
      ]}
      capabilities={[
        {
          title: 'Custom Internal Admin Portals',
          desc: 'High-speed administrative control panels for inventory management, order processing, and customer support.',
        },
        {
          title: 'Clinical & Patient Systems',
          desc: 'Patient intake pipelines, local search acquisition engines, and medical procedure management.',
        },
        {
          title: 'B2B Procurement & RFQ Portals',
          desc: 'Structured equipment catalogs, technical quote calculators, and supplier management.',
        },
        {
          title: 'API Orchestration & Webhooks',
          desc: 'Bridging accounting software, CRMs, inventory databases, and communication channels.',
        },
      ]}
      technologies={['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'WhatsApp API', 'REST APIs']}
      relatedProjects={related}
    />
  )
}
