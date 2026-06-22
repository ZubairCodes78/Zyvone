'use client'
import ServicePage from '@/components/ServicePage'

export default function MarketingPage() {
  return (
    <ServicePage
      title="Growth & Marketing"
      subtitle="GROWTH & MARKETING"
      description="Multi-channel lead generation systems that compound over time. We build marketing that scales without your constant involvement."
      sections={[
        {
          title: "Growth Strategy",
          content: "We develop a comprehensive growth strategy based on your business goals and market position. We identify the channels and tactics that will deliver the highest ROI."
        },
        {
          title: "Lead Generation Systems",
          content: "We build automated lead generation systems across multiple channels — email, social media, paid ads, and organic search. Qualified leads flow to you consistently."
        },
        {
          title: "Email Marketing",
          content: "We build email marketing systems that nurture leads and convert them into customers. Automated sequences, segmentation, and optimization — all running on autopilot."
        },
        {
          title: "Analytics & Optimization",
          content: "We track everything and continuously optimize based on data. Your marketing systems get better over time, delivering increasing returns."
        }
      ]}
      cta={{
        text: "Start your growth system →",
        link: "/contact"
      }}
    />
  )
}
