import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { PORTFOLIO_ITEMS } from '@/lib/data'

export function Portfolio({ variant = 'full' }: { variant?: 'preview' | 'full' }) {
  const categories = useMemo(() => ['All', ...new Set(PORTFOLIO_ITEMS.map((item) => item.category))], [])
  const [active, setActive] = useState('All')

  const items =
    variant === 'preview'
      ? PORTFOLIO_ITEMS.slice(0, 6)
      : active === 'All'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === active)

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title={variant === 'preview' ? 'Websites built for businesses like yours.' : 'Our work'}
          description="A look at the kinds of websites we design and build for local businesses across every industry."
        />

        {variant === 'full' ? (
          <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === category
                    ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-white/5 dark:text-stone-300 dark:hover:bg-white/10',
                )}
              >
                {category}
              </button>
            ))}
          </Reveal>
        ) : null}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.06}
              className="card-surface group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5"
            >
              <div className={cn('relative flex aspect-[4/3] flex-col justify-between overflow-hidden bg-gradient-to-br p-5', item.color)}>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 w-2/3 rounded-full bg-white/50" />
                  <div className="h-2.5 w-1/3 rounded-full bg-white/30" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="absolute right-4 top-4 text-white/70 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                  {item.category}
                </p>
                <p className="mt-1 font-semibold text-stone-900 dark:text-white">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {variant === 'preview' ? (
          <Reveal className="mt-12 flex justify-center">
            <Link to="/portfolio" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              View full portfolio
            </Link>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
