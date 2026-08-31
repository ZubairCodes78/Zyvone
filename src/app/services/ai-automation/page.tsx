import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'AI Automation Agency & Business Workflow Systems',
  description:
    'ZYVONE designs AI-powered business automation pipelines, workflow orchestration, automated lead triage, and backend operational infrastructure.',
  alternates: {
    canonical: 'https://zyvone.site/services/ai-automation',
  },
}

export default function AIAutomationPage() {
  const related = projects.filter((p) =>
    ['cantt-dental-care', 'al-raheem-engineering', 'toolmatic'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="ai-automation"
      title="AI Automation"
      eyebrow="ENGINEERING DISCIPLINE 04"
      subtitle="Autonomous workflow pipelines, intelligent lead triage, automated document processing, and zero-friction operational systems."
      overview="Stop paying team members to copy data between spreadsheets, write repetitive emails, or triage incoming quotes. ZYVONE builds deterministic AI automation pipelines that process transactions, route leads, and execute workflows 24/7 without manual drag."
      problems={[
        {
          problem: 'Manual lead intake causing 24+ hour response delays and lost sales opportunities to faster competitors.',
          solution: 'Instant AI qualification and routing pipelines that score leads and dispatch personalized responses in seconds.',
        },
        {
          problem: 'Human data entry errors during quote generation, inventory updates, or invoice dispatching.',
          solution: 'Automated webhook pipelines with strict validation rules and zero human error propagation.',
        },
      ]}
      capabilities={[
        {
          title: 'Automated Lead Qualification',
          desc: 'AI scoring, intent extraction, and instant routing to CRM or WhatsApp consultation desks.',
        },
        {
          title: 'Document & Invoice Parsing',
          desc: 'Extracting structured data from PDFs, physical scans, and receipts with 99%+ accuracy.',
        },
        {
          title: 'Multi-App Workflow Integration',
          desc: 'n8n, Make, custom Node/Python microservices connecting CRMs, databases, and APIs.',
        },
        {
          title: 'Customer Triage & Communication',
          desc: 'Automated multi-channel notifications via WhatsApp, email, and SMS triggers.',
        },
      ]}
      technologies={['n8n', 'Make', 'Python', 'Node.js', 'WhatsApp API', 'OpenAI', 'PostgreSQL', 'Webhooks']}
      relatedProjects={related}
    />
  )
}
