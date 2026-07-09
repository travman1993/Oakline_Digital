import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'

export function Terms() {
  return (
    <>
      <Seo title="Terms of Service" description="Oakline Digital's terms of service." />
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <Container className="max-w-3xl pb-24 text-stone-600 dark:text-stone-400">
        <div className="card-surface space-y-6 rounded-3xl p-8 sm:p-10">
          <p>
            This is placeholder terms of service content for Oakline Digital. Replace this page with your
            actual terms before launch, covering project scope, payment terms, revisions, ownership of
            deliverables, and support expectations.
          </p>
          <p>
            Clients retain full ownership of their completed website, domain, and hosting. Oakline Digital
            does not retain rights to completed client websites.
          </p>
          <p>Last updated: {new Date().getFullYear()}</p>
        </div>
      </Container>
    </>
  )
}
