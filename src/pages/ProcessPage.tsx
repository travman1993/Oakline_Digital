import { Seo } from '@/components/Seo'
import { Process } from '@/components/sections/Process'
import { PageHeader } from '@/components/ui/PageHeader'

export function ProcessPage() {
  return (
    <>
      <Seo
        title="Process"
        description="Our step-by-step process from free consultation to launch and ongoing support."
      />
      <PageHeader
        eyebrow="How It Works"
        title="A simple, transparent process from start to finish."
        description="We keep things simple so you always know what's happening and what comes next."
      />
      <Process variant="full" />
    </>
  )
}
