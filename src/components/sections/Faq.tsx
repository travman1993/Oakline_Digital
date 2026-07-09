import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { FAQ_ITEMS } from '@/lib/data'

export function Faq({ variant = 'full' }: { variant?: 'preview' | 'full' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const items = variant === 'preview' ? FAQ_ITEMS.slice(0, 4) : FAQ_ITEMS

  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          description="Straight answers to the questions we hear most from local business owners."
        />

        <div className="mt-14 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.question} delay={i * 0.03} className="card-surface overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-stone-900 dark:text-white">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn('shrink-0 text-stone-400 transition-transform duration-300', isOpen && 'rotate-180 text-brand-600 dark:text-brand-300')}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>

        {variant === 'preview' ? (
          <Reveal className="mt-12 flex justify-center">
            <Link to="/faq" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              Read all FAQs
            </Link>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
