import { motion } from 'framer-motion'
import { Share, SquarePlus, Wifi, Battery, Signal } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Logo } from '@/components/ui/Logo'

const STEPS = [
  { title: 'Visit your website', description: 'Open your business website in Safari or Chrome on any phone.' },
  { title: 'Tap the share icon', description: 'Find the share button in the browser toolbar.' },
  { title: 'Add to Home Screen', description: 'Your website now behaves like a real app icon.' },
]

export function PWASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <Badge>Progressive Web App</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-white">
            Your website, right on your customer's home screen.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Every website we build can be installed like an app — no app store required. Customers tap once
            and your business is one icon away, with fast loading and a full-screen experience.
          </p>

          <ol className="mt-8 space-y-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white dark:bg-white dark:text-stone-900">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-stone-900 dark:text-white">{step.title}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="order-1 flex justify-center lg:order-2" delay={0.1}>
          <div className="relative w-full max-w-[280px]">
            <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-stone-900 bg-stone-950 shadow-2xl shadow-stone-900/30">
              <div className="relative aspect-[9/19.5] w-full bg-gradient-to-b from-brand-800 via-brand-900 to-stone-950">
                <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-white/80">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal size={11} />
                    <Wifi size={11} />
                    <Battery size={11} />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 px-5 pt-10">
                  {['#3a4a44', '#3a4a44', '#3a4a44', '#3a4a44'].map((c, i) => (
                    <div key={i} className="h-11 w-11 rounded-[14px]" style={{ background: c }} />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-3 flex flex-col items-center px-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white shadow-lg ring-2 ring-white/40">
                    <Logo showWordmark={false} className="scale-90" />
                  </div>
                  <span className="mt-1.5 text-[9px] font-medium text-white/90">Harvest &amp; Oak</span>
                </motion.div>

                {/* iOS-style share sheet */}
                <motion.div
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-x-2 bottom-2 rounded-[1.75rem] bg-white/95 p-4 backdrop-blur-xl dark:bg-stone-800/95"
                >
                  <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-stone-300 dark:bg-stone-600" />
                  <div className="flex items-center gap-2 border-b border-stone-200 pb-3 dark:border-white/10">
                    <Share size={14} className="text-stone-500 dark:text-stone-300" />
                    <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Share</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 rounded-xl bg-brand-500/10 p-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                      <SquarePlus size={16} />
                    </div>
                    <span className="text-[11.5px] font-semibold text-brand-700 dark:text-brand-300">
                      Add to Home Screen
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
