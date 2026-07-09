import { Seo } from '@/components/Seo'
import { Portfolio } from '@/components/sections/Portfolio'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHeader } from '@/components/ui/PageHeader'

export function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="See the kinds of websites Oakline Digital designs and builds for restaurants, contractors, dentists, and more."
      />
      <PageHeader
        eyebrow="Our Work"
        title="Websites designed for real businesses."
        description="A sample of the industries and business types we love working with. Every project is designed from scratch around the business it represents."
      />
      <Portfolio variant="full" />
      <CtaBanner
        title="Want a website like these?"
        description="Let's talk about your business and design something that fits it perfectly."
      />
    </>
  )
}
