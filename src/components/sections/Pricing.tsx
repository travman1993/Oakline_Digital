import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { PRICING_TIERS, MAINTENANCE_PLANS, LAUNCH_PACKAGE } from '@/lib/data'

export function Pricing({ variant = 'full' }: { variant?: 'preview' | 'full' }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          description="Starting prices for our most common projects. Every quote is customized to your business — no hidden fees, ever."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={(i % 3) * 0.08}
              className={cn(
                'flex flex-col rounded-3xl p-7',
                tier.featured
                  ? 'border-2 border-brand-500 bg-brand-500/[0.04] shadow-lg shadow-brand-500/10 dark:bg-brand-400/[0.06]'
                  : 'card-surface',
              )}
            >
              {tier.featured ? (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-base font-semibold text-stone-900 dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold text-stone-900 dark:text-white">
                {tier.price}
                <span className="text-sm font-medium text-stone-400"> starting at</span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {tier.description}
              </p>
              <Link
                to="/contact"
                className={buttonVariants({
                  variant: tier.featured ? 'primary' : 'secondary',
                  className: 'mt-6 w-full',
                })}
              >
                Get a quote <ArrowRight size={15} />
              </Link>
            </Reveal>
          ))}
        </div>

        {variant === 'preview' ? (
          <Reveal className="mt-12 flex justify-center">
            <Link to="/pricing" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              See full pricing &amp; plans
            </Link>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}

export function MaintenancePlans() {
  const plans = MAINTENANCE_PLANS

  return (
    <section className="border-t border-stone-200 py-24 dark:border-white/10 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Maintenance Plans"
          title="Keep your website secure and up to date."
          description="Optional monthly plans so your website stays fast, safe, and current — without you having to think about it."
        />

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <Reveal
              key={plan.name}
              className={cn(
                'flex flex-col rounded-3xl p-8',
                plan.featured
                  ? 'border-2 border-brand-500 bg-brand-500/[0.04] shadow-lg shadow-brand-500/10 dark:bg-brand-400/[0.06]'
                  : 'card-surface',
              )}
            >
              <h3 className="text-lg font-bold text-stone-900 dark:text-white">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-stone-900 dark:text-white">
                {plan.price}
                <span className="text-sm font-medium text-stone-400">/month</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={buttonVariants({ variant: plan.featured ? 'primary' : 'secondary', className: 'mt-7 w-full' })}
              >
                Choose {plan.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function LaunchPackage() {
  const { includes, addOns } = LAUNCH_PACKAGE

  return (
    <section className="border-t border-stone-200 py-24 dark:border-white/10 sm:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-stone-900/10 bg-gradient-to-br from-stone-900 via-stone-900 to-brand-950 p-10 text-white shadow-2xl sm:p-14 dark:border-white/10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-200">
                Featured Package
              </span>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Website Launch Package</h3>
              <p className="mt-4 max-w-md text-stone-300">
                Everything a local business needs to launch a professional website, all in one package.
              </p>
              <Link to="/contact" className={buttonVariants({ className: 'mt-8', size: 'lg' })}>
                Get Started <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Includes</p>
                <ul className="mt-3 space-y-2.5">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-stone-200">
                      <Check size={15} className="shrink-0 text-brand-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">Optional Add-ons</p>
                <ul className="mt-3 space-y-2.5">
                  {addOns.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-stone-200">
                      <Check size={15} className="shrink-0 text-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export function PhotographyAddOn() {
  const covers = ['Team', 'Staff', 'Building', 'Products', 'Services', 'Interior', 'Exterior']

  return (
    <section className="border-t border-stone-200 py-24 dark:border-white/10 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold-600 dark:text-gold-400">
            Optional Add-On
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-white">
            Business Photography
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Great photos make a website feel trustworthy and professional. You can provide your own photos, or
            we can photograph your business for you.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="card-surface rounded-2xl p-5">
              <p className="font-semibold text-stone-900 dark:text-white">Option 1</p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">You provide your own photos</p>
            </div>
            <div className="card-surface rounded-2xl p-5">
              <p className="font-semibold text-stone-900 dark:text-white">Option 2</p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">We photograph your business</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
            Clients receive fully edited, high-resolution digital images for their website and future
            marketing.
          </p>
          <Link to="/contact" className={buttonVariants({ className: 'mt-7' })}>
            Add photography to my project <ArrowRight size={16} />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {covers.map((label, i) => (
            <div
              key={label}
              className={cn(
                'flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white shadow-sm',
                i % 3 === 0 && 'from-brand-400 to-brand-700',
                i % 3 === 1 && 'from-gold-400 to-gold-600',
                i % 3 === 2 && 'from-stone-600 to-stone-800',
              )}
            >
              {label}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
