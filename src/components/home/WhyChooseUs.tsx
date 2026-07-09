import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { WHY_CHOOSE_US } from '@/lib/data'

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Honest, transparent, and genuinely helpful."
          description="We built Oakline Digital to be the web design partner we always wished existed — no jargon, no surprise invoices, no pressure."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, i) => (
            <Reveal
              key={item}
              delay={(i % 2) * 0.05}
              className="card-surface flex items-start gap-3 rounded-2xl p-5"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" />
              <span className="font-medium text-stone-800 dark:text-stone-200">{item}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
