import {
  LayoutTemplate,
  RefreshCcw,
  Wrench,
  Gauge,
  ShoppingCart,
  Briefcase,
  Code2,
  Camera,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = { label: string; to: string }

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  to: string
}

export const SERVICES: Service[] = [
  {
    icon: LayoutTemplate,
    title: 'Website Design & Development',
    description:
      'Custom-designed, hand-coded websites built to represent your business at its best — fast, modern, and mobile-first.',
    cta: 'Start a project',
    to: '/contact',
  },
  {
    icon: RefreshCcw,
    title: 'Website Redesign',
    description:
      'Outdated or underperforming site? We rebuild it from the ground up with modern design and clean code.',
    cta: 'Get a redesign quote',
    to: '/contact',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, backups, and security so your site keeps running smoothly long after launch.',
    cta: 'View maintenance plans',
    to: '/pricing',
  },
  {
    icon: Gauge,
    title: 'Website Speed Optimization',
    description:
      'Slow websites lose customers. We optimize performance so your pages load fast on every device.',
    cta: 'Speed up my site',
    to: '/contact',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    description:
      'Sell products online with a fast, secure storefront designed to convert browsers into buyers.',
    cta: 'Discuss my store',
    to: '/contact',
  },
  {
    icon: Briefcase,
    title: 'Portfolio Websites',
    description:
      'Showcase your work with a clean, elegant portfolio built to impress clients and land more business.',
    cta: 'Build my portfolio',
    to: '/contact',
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description:
      'Need more than a website? We build custom tools and applications tailored to your workflow.',
    cta: 'Discuss my project',
    to: '/contact',
  },
  {
    icon: Camera,
    title: 'Business Photography',
    description:
      'Optional add-on: professional photography of your team, products, and location for your website and marketing.',
    cta: 'Add photography',
    to: '/pricing',
  },
  {
    icon: Rocket,
    title: 'Website Launch Package',
    description:
      'Everything you need to go live — custom design, contact form, maps, SEO basics, and 30 days of support.',
    cta: 'View launch package',
    to: '/pricing',
  },
]

export type PricingTier = {
  name: string
  price: string
  description: string
  featured?: boolean
}

export const PRICING_TIERS: PricingTier[] = [
  { name: 'Landing Page', price: '$400', description: 'A single, high-impact page to promote your business or offer.' },
  { name: 'Business Website', price: '$900', description: 'Up to 5 pages — perfect for most local businesses.', featured: true },
  { name: 'Large Website', price: '$1,800', description: '6–10 pages for businesses with more to showcase.' },
  { name: 'Website Redesign', price: '$700', description: 'A full rebuild of your existing website.' },
  { name: 'E-Commerce Website', price: '$2,000', description: 'A complete online store built to sell.' },
  { name: 'Custom Web Application', price: '$3,000', description: 'Tailored tools and applications for your business.' },
]

export type MaintenancePlan = {
  name: string
  price: string
  features: string[]
  featured?: boolean
}

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    name: 'Standard',
    price: '$100',
    features: [
      'Security updates',
      'Website backups',
      'Up to 1 hour of edits',
      'Text updates',
      'Image replacements',
      'Promotions',
      'Email support',
    ],
  },
  {
    name: 'Premium',
    price: '$200',
    featured: true,
    features: [
      'Everything in Standard, plus:',
      'Up to 3 hours of updates',
      'Priority support',
      'New pages',
      'Website health checks',
      'Basic SEO updates',
      'Performance monitoring',
    ],
  },
]

export const LAUNCH_PACKAGE = {
  name: 'Website Launch Package',
  includes: [
    'Custom Website',
    'Mobile Responsive',
    'Contact Form',
    'Google Maps',
    'Basic SEO',
    'Speed Optimization',
    '30 Days of Support',
  ],
  addOns: ['Business Photography', 'Additional Pages', 'PWA Installation', 'Maintenance Plan'],
}

export type PortfolioItem = {
  title: string
  category: string
  color: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { title: 'Harvest & Oak Restaurant', category: 'Restaurant', color: 'from-orange-400 to-rose-500' },
  { title: 'Sterling Contracting Co.', category: 'Contractor', color: 'from-amber-500 to-yellow-600' },
  { title: 'Brightside Family Dental', category: 'Dentist', color: 'from-sky-400 to-blue-500' },
  { title: 'Evergreen Landscaping', category: 'Landscaping', color: 'from-emerald-400 to-green-600' },
  { title: 'Summit Roofing Solutions', category: 'Roofing', color: 'from-slate-500 to-zinc-700' },
  { title: 'Whitmore & Associates Law', category: 'Law Firm', color: 'from-indigo-500 to-violet-600' },
  { title: 'Precision Auto Repair', category: 'Auto Repair', color: 'from-red-500 to-orange-600' },
]

export type ProcessStep = {
  step: number
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: 'Free Consultation', description: 'We learn about your business, goals, and what you need your website to do.' },
  { step: 2, title: 'Planning', description: 'We map out site structure, content, and timeline so there are no surprises.' },
  { step: 3, title: 'Design', description: 'We design a custom look and feel that matches your brand and builds trust.' },
  { step: 4, title: 'Development', description: 'We hand-code your site for speed, responsiveness, and reliability.' },
  { step: 5, title: 'Review', description: 'You review the site and request changes until it feels exactly right.' },
  { step: 6, title: 'Launch', description: 'We publish your website and make sure everything works flawlessly.' },
  { step: 7, title: 'Ongoing Support', description: 'We stay available for updates, edits, and maintenance whenever you need it.' },
]

export type FaqItem = { question: string; answer: string }

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How long does a website take?',
    answer:
      'Most business websites take 2–4 weeks from our first conversation to launch, depending on scope and how quickly we receive content and feedback. Larger or custom projects may take longer — we’ll give you a clear timeline before we start.',
  },
  {
    question: 'Who owns the website?',
    answer:
      'You do — completely. You own your website, your domain, and your hosting. We never hold your site hostage or lock you into using us for anything after launch.',
  },
  {
    question: 'Can you redesign my current website?',
    answer:
      'Yes. Whether your site was built years ago or on a platform you’ve outgrown, we can rebuild it with a modern design, faster performance, and code you fully own.',
  },
  {
    question: 'Do I need maintenance?',
    answer:
      'Maintenance isn’t required, but it’s highly recommended. It keeps your site secure, backed up, and up to date so you can focus on running your business instead of your website.',
  },
  {
    question: 'Can I use my own domain?',
    answer:
      'Absolutely. We’ll help you connect your existing domain, or help you register a new one if you don’t have one yet. Either way, it belongs to you.',
  },
  {
    question: 'What if I already have Squarespace or Wix?',
    answer:
      'If you currently have a Squarespace or Wix website, we recommend rebuilding it from scratch using modern web technologies. This gives you full ownership of your website’s code, removes monthly platform fees tied to design limitations, and frees you from being locked into a proprietary platform. The result is a faster, more flexible, and fully-owned website built around your business.',
  },
]

export const WHY_CHOOSE_US = [
  'No confusing tech jargon',
  'Transparent pricing',
  'Fast loading websites',
  'Mobile-first design',
  'Basic SEO included',
  'Friendly one-on-one service',
  'You own your website, domain, and hosting',
  'We never lock clients into our services',
]
