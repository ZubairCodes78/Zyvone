'use client'
import ServicePage from '@/components/ServicePage'

export default function AutomationPage() {
  return (
    <ServicePage
      title="AI Automation"
      subtitle="AI AUTOMATION"
      description="Replace the manual layer in your business with intelligent systems that run 24/7. We build automation that compounds."
      sections={[
        {
          title: "Process Analysis",
          content: "We audit your workflows to identify repetitive tasks that can be automated. No assumptions — we map your actual processes and find the high-impact opportunities."
        },
        {
          title: "Custom Automation",
          content: "We build custom automation using tools like Zapier, Make, n8n, and custom AI integrations. Each system is designed for your specific needs, not generic templates."
        },
        {
          title: "AI Integration",
          content: "We integrate AI into your workflows — from GPT-powered content generation to intelligent document processing. Your systems get smarter over time."
        },
        {
          title: "Monitoring & Support",
          content: "We don't just build and leave. We monitor your systems, fix issues before they become problems, and continuously optimize for better performance."
        }
      ]}
      cta={{
        text: "Book a free audit →",
        link: "/book-call"
      }}
    />
  )
}
