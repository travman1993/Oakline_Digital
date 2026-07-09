import { Seo } from '@/components/Seo'
import { Faq } from '@/components/sections/Faq'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHeader } from '@/components/ui/PageHeader'

export function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to common questions about timelines, ownership, redesigns, maintenance, domains, and moving off Squarespace or Wix."
      />
      <PageHeader
        eyebrow="FAQ"
        title="Answers to your questions."
        description="Still have a question? Reach out and we'll get back to you personally — no automated responses."
      />
      <Faq variant="full" />
      <CtaBanner />
    </>
  )
}
