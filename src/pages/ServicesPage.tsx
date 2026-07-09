import { Seo } from '@/components/Seo'
import { Services } from '@/components/sections/Services'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHeader } from '@/components/ui/PageHeader'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Website design, redesigns, maintenance, speed optimization, e-commerce, custom web applications, and business photography."
      />
      <PageHeader
        eyebrow="What We Offer"
        title="Services built to help your business grow."
        description="From a simple landing page to a fully custom web application, we offer everything a growing business needs online."
      />
      <Services variant="full" />
      <CtaBanner
        title="Not sure which service you need?"
        description="Tell us about your business and we'll recommend the right fit — no pressure, no obligation."
      />
    </>
  )
}
