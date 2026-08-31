import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'AI Development Agency & Custom AI Software Systems',
  description:
    'ZYVONE engineers AI software, LLM integrations, autonomous AI agents, vector database search, and internal RAG pipelines embedded in web applications.',
  alternates: {
    canonical: 'https://zyvone.site/services/ai-development',
  },
}

export default function AIDevelopmentPage() {
  const related = projects.filter((p) =>
    ['toolmatic', 'pdfmaster', 'cantt-dental-care'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="ai-development"
      title="AI Development"
      eyebrow="ENGINEERING DISCIPLINE 03"
      subtitle="Custom AI software systems, LLM model orchestration, autonomous multi-agent pipelines, and proprietary vector RAG infrastructure."
      overview="We engineer artificial intelligence as an invisible operational layer, not a marketing gimmick. ZYVONE builds custom AI applications, deterministic extraction models, and multi-agent workflows embedded directly into your software system."
      problems={[
        {
          problem: 'Generic AI chatbots that hallucinate false information and fail to connect with company data sources.',
          solution: 'Deterministic RAG (Retrieval-Augmented Generation) pipelines anchored to verified vector databases and strict JSON schemas.',
        },
        {
          problem: 'Manual data triage where staff waste hours reading and categorizing incoming inquiries, documents, or emails.',
          solution: 'Automated AI classification agents that parse unstructured text into strongly typed database records in milliseconds.',
        },
      ]}
      capabilities={[
        {
          title: 'LLM Orchestration & Prompt Architecture',
          desc: 'OpenAI GPT-4o, Anthropic Claude, and open-source Llama model pipelines with structured JSON output.',
        },
        {
          title: 'Retrieval-Augmented Generation (RAG)',
          desc: 'Vector databases (Pinecone, Qdrant, Pgvector) for semantic search over proprietary docs.',
        },
        {
          title: 'Autonomous AI Agents',
          desc: 'Multi-step agent workflows executing conditional decisions, API calls, and automated database updates.',
        },
        {
          title: 'Fine-Tuning & Model Integration',
          desc: 'Custom embeddings, domain-specific classification models, and private API proxies.',
        },
      ]}
      technologies={['OpenAI API', 'Anthropic Claude', 'Python', 'TypeScript', 'LangChain', 'Pinecone', 'Pgvector', 'Next.js']}
      relatedProjects={related}
    />
  )
}
