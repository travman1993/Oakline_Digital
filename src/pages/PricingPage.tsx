import { Seo } from '@/components/Seo'
import { Pricing, MaintenancePlans, LaunchPackage, PhotographyAddOn } from '@/components/sections/Pricing'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHeader } from '@/components/ui/PageHeader'

export function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Transparent starting prices for websites, redesigns, e-commerce, custom applications, maintenance plans, and business photography."
      />
      <PageHeader
        eyebrow="Pricing"
        title="Straightforward pricing. No surprises."
        description="Every project is quoted based on your specific needs, but here's what you can expect to invest to get started."
      />
      <Pricing variant="full" />
      <LaunchPackage />
      <MaintenancePlans />
      <PhotographyAddOn />
      <CtaBanner />
    </>
  )
}
