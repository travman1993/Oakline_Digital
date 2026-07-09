import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="noise-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <Container className="text-center">
        <Reveal>
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-white">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  )
}
