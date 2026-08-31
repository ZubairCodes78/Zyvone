export interface ProjectStats {
  uptime?: string
  loadTime?: string
  shippedFeatures?: string
}

export interface Project {
  slug: string
  id: string
  name: string
  industry: string
  category: string
  title: string
  shortTitle: string
  tag: string
  result: string
  resultLabel: string
  link: string | null
  overview: string
  description: string
  challenge: string
  problem: string
  approach: string
  execution: string[]
  outcome: string
  reflection: string
  heroImage: string
  gallery: string[]
  beforeImage?: string | null
  afterImage?: string | null
  architecture?: string | null
  year: '2026'
  services: string[]
  stack: string[]
  stats?: ProjectStats
  anatomy?: 'system' | 'service' | 'commitment'
}

export const projects: Project[] = [
  {
    slug: 'wearomnia',
    id: '01',
    name: 'WearOmnia',
    shortTitle: 'WearOmnia',
    title: 'WearOmnia — High-Fashion Modest Apparel D2C Commerce Platform',
    industry: 'Fashion / E-commerce',
    category: 'Fashion / E-commerce',
    tag: 'D2C E-Commerce',
    result: 'Nationwide Scale',
    resultLabel: 'Modest D2C Platform',
    link: 'https://wearomnia.com/',
    overview: 'A luxury modest fashion storefront engineered for seamless collection exploration, rapid sizing consultations, and localized nationwide Cash on Delivery.',
    description: 'A luxury modest fashion storefront engineered for seamless collection exploration, rapid sizing consultations, and localized nationwide Cash on Delivery.',
    challenge: 'Scaling beyond an Instagram boutique resulted in manual DM friction, lost orders, sizing confusion, and inventory mismatch that hindered brand growth.',
    problem: 'Scaling beyond an Instagram boutique resulted in manual DM friction, lost orders, sizing confusion, and inventory mismatch that hindered brand growth.',
    approach: 'We built a bespoke direct-to-consumer digital flagship with editorial visual hierarchy, instant guest checkout with automated COD confirmation, and embedded conversational support.',
    execution: [
      'Engineered editorial high-fashion design system with fluid typography and rapid image delivery',
      'Built frictionless one-page guest checkout supporting automated nationwide COD logistics',
      'Integrated real-time WhatsApp sizing and styling consultation triggers',
      'Implemented mobile-first performance architecture achieving 98+ mobile PageSpeed rating',
      'Structured clear post-purchase tracking, exchange policies, and automated dispatch alerts',
    ],
    outcome: 'Successfully transitioned from manual social commerce to an automated e-commerce powerhouse processing orders nationwide without manual administrative overhead.',
    reflection: 'E-commerce luxury is about friction removal. When the shopping flow is seamless and trustworthy, customer conversion follows effortlessly.',
    heroImage: '/images/wearomnia.png',
    gallery: [
      '/images/wearomnia.png',
      '/images/amin-raisat-hosiery.png',
    ],
    year: '2026',
    services: ['E-Commerce Architecture', 'D2C UI/UX', 'Logistics Integration'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'WhatsApp API'],
    stats: {
      uptime: '99.99%',
      loadTime: '84ms',
      shippedFeatures: '3 collections',
    },
    anatomy: 'commitment',
  },
  {
    slug: 'amin-raisat-hosiery',
    id: '02',
    name: 'Amin Raisat Hosiery',
    shortTitle: 'Amin Raisat Hosiery',
    title: 'Amin Raisat Hosiery — Pure Cotton D2C Store & Wholesale Trade Portal',
    industry: 'Fashion / Commerce',
    category: 'Fashion / Commerce',
    tag: 'D2C & B2B Trade',
    result: 'Direct Manufacturer Channel',
    resultLabel: 'Integrated Commerce',
    link: 'https://aminhosiery.com/',
    overview: 'A hybrid direct-to-consumer retail store and B2B wholesale trade portal for a premier combed cotton garment manufacturer.',
    description: 'A hybrid direct-to-consumer retail store and B2B wholesale trade portal for a premier combed cotton garment manufacturer.',
    challenge: 'A multi-decade legacy manufacturing operation was entirely reliant on traditional offline distributor channels, missing direct consumer margins and nationwide retail demand.',
    problem: 'A multi-decade legacy manufacturing operation was entirely reliant on traditional offline distributor channels, missing direct consumer margins and nationwide retail demand.',
    approach: 'We engineered a dual-purpose commerce platform featuring multi-variant size selectors, automated multi-piece bundle incentives, Cash on Delivery, and a dedicated bulk trade quotation portal.',
    execution: [
      'Architected hybrid retail and B2B wholesale ordering pipelines in Next.js',
      'Created interactive fabric quality comparison matrix demonstrating combed cotton seam construction',
      'Implemented automated bundle discounts (e.g. Free Delivery on 3+ pieces) boosting average order value',
      'Engineered instant WhatsApp order routing for conversational buyer preferences',
      'Optimized asset delivery pipeline for instant mobile rendering on 3G/4G networks',
    ],
    outcome: 'Established a lucrative D2C direct revenue stream alongside commercial wholesale inquiries direct from factory floor to consumer doorsteps.',
    reflection: 'For heritage industrial manufacturers, combining direct consumer simplicity with robust trade capabilities creates unmatched market leverage.',
    heroImage: '/images/amin-raisat-hosiery.png',
    gallery: [
      '/images/amin-raisat-hosiery.png',
      '/images/wearomnia.png',
    ],
    year: '2026',
    services: ['D2C Commerce', 'B2B Wholesale Portal', 'Variant Architecture'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API', 'Vercel'],
    stats: {
      uptime: '99.97%',
      loadTime: '95ms',
      shippedFeatures: '4 categories',
    },
    anatomy: 'commitment',
  },
  {
    slug: 'toolmatic',
    id: '03',
    name: 'Toolmatic',
    shortTitle: 'Toolmatic',
    title: 'Toolmatic — AI-Powered Online Utilities & Search Tools',
    industry: 'Digital Product / AI Tools',
    category: 'Digital Product / AI Tools',
    tag: 'AI Utilities Platform',
    result: '50+ Tools Live',
    resultLabel: 'Edge Utility System',
    link: 'https://toolmatic.site',
    overview: 'A high-performance online utilities platform of 50+ free AI tools and calculators engineered to execute at the edge with zero registration barriers.',
    description: 'A high-performance online utilities platform of 50+ free AI tools and calculators engineered to execute at the edge with zero registration barriers.',
    challenge: 'Most SEO tool platforms are either paywalled, sluggish, or bloated with intrusive ads and required sign-ups. The market demanded fast, free, no-login utilities that execute instantly in under 100 milliseconds.',
    problem: 'Most SEO tool platforms are either paywalled, sluggish, or bloated with intrusive ads and required sign-ups. The market demanded fast, free, no-login utilities that execute instantly in under 100 milliseconds.',
    approach: 'We architected a modular edge-first application where each tool operates autonomously with client-side computation and Vercel edge functions, ensuring instantaneous response times and zero server bottlenecks.',
    execution: [
      'Built in Next.js App Router for optimal Core Web Vitals and instant client interactivity',
      'Engineered 50+ distinct edge utility tools including Meta Tag Generator, Keyword Density Checker, and Word Counter',
      'Created a modular architecture allowing rapid addition of new utilities without codebase refactoring',
      'Optimized technical SEO per tool with structured schema markup generating organic traffic within weeks',
      'Implemented edge caching layer ensuring global sub-80ms response times',
    ],
    outcome: 'Toolmatic launched with 50+ tools, maintaining 99.9% uptime and delivering sub-second execution across 100k+ monthly requests with zero authentication friction.',
    reflection: 'Utility software succeeds on speed and trust. When tools load in under 100ms and require zero personal data, adoption becomes compounding.',
    heroImage: '/images/toolmatic.png',
    gallery: [
      '/images/toolmatic.png',
      '/images/pdfmaster.png',
    ],
    year: '2026',
    services: ['Product Architecture', 'Edge Engineering', 'Programmatic SEO'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Cloudflare'],
    stats: {
      uptime: '99.98%',
      loadTime: '68ms',
      shippedFeatures: '52 tools',
    },
    anatomy: 'system',
  },
  {
    slug: 'pdfmaster',
    id: '04',
    name: 'PDFMaster',
    shortTitle: 'PDFMaster',
    title: 'PDFMaster — Private Client-Side Document Processing Suite',
    industry: 'Document / SaaS',
    category: 'Document / SaaS',
    tag: 'Web Utility Suite',
    result: 'Zero Server Cost',
    resultLabel: 'Client-Side Suite',
    link: 'https://pdfmaster.site',
    overview: 'A zero-friction PDF manipulation platform offering merge, split, compression, and format conversions executed entirely inside the user\'s browser.',
    description: 'A zero-friction PDF manipulation platform offering merge, split, compression, and format conversions executed entirely inside the user\'s browser.',
    challenge: 'Mainstream PDF services require file uploads to remote servers, imposing privacy risks, upload wait times, and recurring subscription walls for basic document operations.',
    problem: 'Mainstream PDF services require file uploads to remote servers, imposing privacy risks, upload wait times, and recurring subscription walls for basic document operations.',
    approach: 'We engineered a client-side WebAssembly and Web Worker processing architecture. Documents are processed locally in memory, guaranteeing 100% data privacy and eliminating cloud computing expenses.',
    execution: [
      'Engineered client-side Web Worker pipeline integrating PDF-Lib and WebAssembly engines',
      'Achieved zero document transfer to servers — all file processing stays private in browser memory',
      'Created responsive drag-and-drop workspace optimized for mobile document review',
      'Architected individual landing pages with unique schema for 40+ specific document tasks',
      'Implemented progressive web app capabilities for offline document manipulation',
    ],
    outcome: 'Eliminated server processing costs while processing thousands of document operations daily with sub-3-second client execution and zero data privacy liabilities.',
    reflection: 'Engineering for client-side execution not only drastically reduces infrastructure costs — it transforms privacy into your primary competitive moat.',
    heroImage: '/images/pdfmaster.png',
    gallery: [
      '/images/pdfmaster.png',
      '/images/toolmatic.png',
    ],
    year: '2026',
    services: ['WASM Engineering', 'Client-Side Architecture', 'UI/UX Design'],
    stack: ['Next.js', 'TypeScript', 'Web Workers', 'PDF-Lib', 'WebAssembly'],
    stats: {
      uptime: '100%',
      loadTime: '92ms',
      shippedFeatures: '48 tools',
    },
    anatomy: 'system',
  },
  {
    slug: 'cantt-dental-care',
    id: '05',
    name: 'Cantt Dental Care',
    shortTitle: 'Cantt Dental Care',
    title: 'Cantt Dental Care — Clinic Patient Acquisition Infrastructure',
    industry: 'Healthcare / Digital Experience',
    category: 'Healthcare / Digital Experience',
    tag: 'Healthcare System',
    result: '#1 Local Rank',
    resultLabel: 'Patient Engine',
    link: 'https://canttdentalcare.com',
    overview: 'A digital patient acquisition platform and modern clinical web system for a premier dental healthcare facility, engineered for localized search supremacy.',
    description: 'A digital patient acquisition platform and modern clinical web system for a premier dental healthcare facility, engineered for localized search supremacy.',
    challenge: 'The clinic was invisible online, relying exclusively on legacy word-of-mouth referrals while competing practices captured local Google search intent.',
    problem: 'The clinic was invisible online, relying exclusively on legacy word-of-mouth referrals while competing practices captured local Google search intent.',
    approach: 'We deployed a high-performance clinical platform with procedure-level medical schema, hyper-local SEO optimization, and a friction-free WhatsApp appointment booking pipeline.',
    execution: [
      'Built custom Next.js clinical platform with sub-1-second Core Web Vitals performance',
      'Structured detailed medical procedure pages targeting high-intent local healthcare keywords',
      'Integrated direct WhatsApp triage booking system routing inquiries straight to clinical desk',
      'Implemented comprehensive MedicalBusiness schema markup and Google Business Profile optimization',
      'Configured automated analytics tracking for patient acquisition attribution',
    ],
    outcome: 'Ranked #1 on Google for primary regional dental search terms within 60 days, driving a 300% surge in verified direct patient consultations.',
    reflection: 'A local business website is not a digital brochure — it is an automated patient acquisition pipeline.',
    heroImage: '/images/cantt-dental-care.png',
    gallery: [
      '/images/cantt-dental-care.png',
      '/images/al-raheem-engineering.png',
    ],
    year: '2026',
    services: ['Clinical Architecture', 'Local SEO System', 'Conversion UX'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Schema.org', 'Vercel'],
    stats: {
      uptime: '99.99%',
      loadTime: '110ms',
      shippedFeatures: '18 services',
    },
    anatomy: 'service',
  },
  {
    slug: 'al-raheem-engineering',
    id: '06',
    name: 'Al Raheem Engineering',
    shortTitle: 'Al Raheem Engineering',
    title: 'Al Raheem Engineering — Industrial Machinery & B2B Quotation Portal',
    industry: 'Manufacturing / Industrial B2B',
    category: 'Manufacturing / Industrial B2B',
    tag: 'Industrial B2B Portal',
    result: 'Global B2B Quotes',
    resultLabel: 'Machinery Catalog',
    link: 'https://alraheemengineering.com',
    overview: 'An industrial machinery digital catalog and automated B2B quote pipeline designed for packaging machinery manufacturing.',
    description: 'An industrial machinery digital catalog and automated B2B quote pipeline designed for packaging machinery manufacturing.',
    challenge: 'The manufacturing company lacked a structured digital product catalog, making it difficult for domestic and international B2B buyers to evaluate machinery specs and request formal commercial quotations.',
    problem: 'The manufacturing company lacked a structured digital product catalog, making it difficult for domestic and international B2B buyers to evaluate machinery specs and request formal commercial quotations.',
    approach: 'We engineered a technical machinery catalog complete with mechanical specifications, operational video demonstrations, and a structured RFQ (Request for Quote) pipeline.',
    execution: [
      'Engineered structured B2B machinery portfolio with rigorous mechanical data specifications',
      'Created custom RFQ consultation workflows for industrial equipment procurement',
      'Optimized responsive layouts for shop-floor industrial tablets and mobile procurement officers',
      'Structured technical B2B manufacturing keyword hierarchies and metadata',
      'Integrated automated inquiry notification system directly into management workflows',
    ],
    outcome: 'Modernized the manufacturer\'s digital credibility, securing commercial equipment quotation inquiries from industrial partners across South Asia and the Middle East.',
    reflection: 'In industrial manufacturing, technical precision in presentation directly correlates to trust and contract size.',
    heroImage: '/images/al-raheem-engineering.png',
    gallery: [
      '/images/al-raheem-engineering.png',
      '/images/cantt-dental-care.png',
    ],
    year: '2026',
    services: ['B2B Catalog Engine', 'RFQ Pipeline', 'Technical Architecture'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Edge'],
    stats: {
      uptime: '99.95%',
      loadTime: '125ms',
      shippedFeatures: '24 models',
    },
    anatomy: 'service',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
