import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { buttonVariants } from '@/components/ui/Button'
import { PROCESS_STEPS } from '@/lib/data'

export function Process({ variant = 'full' }: { variant?: 'preview' | 'full' }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A clear, guided path from idea to launch."
          description="No confusion, no guesswork. Here's exactly what working with Oakline Digital looks like."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-stone-200 dark:bg-white/10 sm:block" />
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05} className="relative flex gap-6">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white dark:bg-white dark:text-stone-900">
                  {step.step}
                </span>
                <div className="card-surface flex-1 rounded-2xl p-6">
                  <h3 className="font-bold text-stone-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {variant === 'preview' ? (
          <Reveal className="mt-14 flex justify-center">
            <Link to="/process" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              See our full process
            </Link>
          </Reveal>
        ) : (
          <Reveal className="mt-14 flex justify-center">
            <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
              Start with a free consultation <ArrowRight size={18} />
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
