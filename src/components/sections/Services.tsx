import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { buttonVariants } from '@/components/ui/Button'
import { SERVICES } from '@/lib/data'

export function Services({ variant = 'full' }: { variant?: 'preview' | 'full' }) {
  const items = variant === 'preview' ? SERVICES.slice(0, 6) : SERVICES

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title={variant === 'preview' ? 'Everything your business needs online.' : 'Our services'}
          description={
            variant === 'preview'
              ? 'From your first landing page to a full custom application, we build it, and keep it running.'
              : 'Whatever stage your business is at, we have a service built to help you grow online — with clear pricing and no surprises.'
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 0.08}
              className="card-surface group flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:text-brand-300">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-stone-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {service.description}
              </p>
              <Link
                to={service.to}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:gap-2.5 dark:text-brand-300"
              >
                {service.cta} <ArrowRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>

        {variant === 'preview' ? (
          <Reveal className="mt-12 flex justify-center">
            <Link to="/services" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              View all services
            </Link>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
