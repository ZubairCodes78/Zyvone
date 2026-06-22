'use client'
import ServicePage from '@/components/ServicePage'

export default function WebPage() {
  return (
    <ServicePage
      title="Web Development"
      subtitle="WEB DEVELOPMENT"
      description="Architecture-first websites that convert, rank, and scale. We build digital products that work as hard as you do."
      sections={[
        {
          title: "Discovery & Strategy",
          content: "We start by understanding your business goals, audience, and competitive landscape. No templates — we build a strategy specific to your needs."
        },
        {
          title: "Design & UX",
          content: "Premium design that reflects your brand and converts visitors. We focus on user experience, accessibility, and performance from day one."
        },
        {
          title: "Development",
          content: "We build using modern technologies like Next.js, React, and Tailwind CSS. Fast, secure, and scalable — built to grow with your business."
        },
        {
          title: "SEO & Performance",
          content: "Every site we build is optimized for search engines and performance. We don't just build sites — we build assets that rank."
        },
        {
          title: "Maintenance & Support",
          content: "We provide ongoing support, security updates, and performance monitoring. Your site stays fast, secure, and up to date."
        }
      ]}
      cta={{
        text: "Start your project →",
        link: "/contact"
      }}
    />
  )
}
