import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'

export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="Oakline Digital's privacy policy." />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Container className="max-w-3xl pb-24 text-stone-600 dark:text-stone-400">
        <div className="card-surface space-y-6 rounded-3xl p-8 sm:p-10">
          <p>
            This is placeholder privacy policy content for Oakline Digital. Replace this page with your
            business's actual privacy practices before launch, including what information is collected through
            this website (such as contact form submissions), how it is used, and how visitors can contact you
            with questions.
          </p>
          <p>
            Oakline Digital does not sell personal information to third parties. Any information submitted
            through our contact form is used solely to respond to your inquiry.
          </p>
          <p>Last updated: {new Date().getFullYear()}</p>
        </div>
      </Container>
    </>
  )
}
