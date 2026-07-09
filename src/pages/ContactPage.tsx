import { Seo } from '@/components/Seo'
import { Contact } from '@/components/sections/Contact'
import { PageHeader } from '@/components/ui/PageHeader'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Request a free consultation with Oakline Digital. Tell us about your business and we'll help you plan the right website."
      />
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about your website."
        description="Fill out the form below or reach out directly — we typically respond within one business day."
      />
      <Contact />
    </>
  )
}
