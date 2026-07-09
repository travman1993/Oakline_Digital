import { motion } from 'framer-motion'
import { MapPin, Star, ArrowRight } from 'lucide-react'

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mx-auto w-full max-w-[300px] animate-float"
    >
      {/* glow */}
      <div className="absolute inset-0 -z-10 scale-90 rounded-[3rem] bg-brand-400/30 blur-3xl dark:bg-brand-500/20" />

      {/* phone frame */}
      <div className="relative rounded-[2.75rem] border-[10px] border-stone-900 bg-stone-900 shadow-2xl shadow-stone-900/30 dark:border-stone-950 dark:bg-stone-950">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-stone-900 dark:bg-stone-950" />

        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-white dark:bg-stone-900">
          {/* screen content: sample business website */}
          <div className="flex h-full flex-col overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 pb-2 pt-8">
              <span className="font-display text-[13px] font-bold text-stone-900 dark:text-white">Harvest &amp; Oak</span>
              <div className="flex gap-1">
                <span className="h-1 w-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                <span className="h-1 w-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                <span className="h-1 w-1 rounded-full bg-stone-300 dark:bg-stone-600" />
              </div>
            </div>

            <div className="relative mx-3 mt-1 h-28 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-emerald-700">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
              <div className="absolute bottom-2.5 left-3 right-3">
                <p className="text-[13px] font-bold leading-tight text-white">Fresh, Local, Delicious.</p>
                <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-stone-900">
                  Reserve a Table <ArrowRight size={9} />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5 px-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={9} className="fill-gold-400 text-gold-400" />
              ))}
              <span className="text-[9px] font-medium text-stone-400">4.9 (238 reviews)</span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 px-4">
              {['Menu', 'Order Online', 'Catering', 'Events'].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-stone-100 bg-stone-50 px-2 py-2.5 text-[9.5px] font-semibold text-stone-700 dark:border-white/5 dark:bg-white/5 dark:text-stone-200"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-3 space-y-1.5 px-4">
              <div className="h-1.5 w-4/5 rounded-full bg-stone-100 dark:bg-white/10" />
              <div className="h-1.5 w-3/5 rounded-full bg-stone-100 dark:bg-white/10" />
            </div>

            <div className="mt-auto flex items-center gap-1.5 border-t border-stone-100 px-4 py-3 dark:border-white/5">
              <MapPin size={11} className="text-brand-600 dark:text-brand-300" />
              <span className="text-[9px] font-medium text-stone-500 dark:text-stone-400">
                412 Main St — Open until 9pm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass absolute -left-10 top-16 hidden rounded-2xl px-4 py-3 shadow-xl sm:block"
      >
        <p className="text-xs font-semibold text-stone-900 dark:text-white">Website Live</p>
        <p className="text-[11px] text-stone-500 dark:text-stone-400">Launched in 3 weeks</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="glass absolute -right-8 bottom-24 hidden rounded-2xl px-4 py-3 shadow-xl sm:block"
      >
        <p className="text-xs font-semibold text-stone-900 dark:text-white">98 / 100</p>
        <p className="text-[11px] text-stone-500 dark:text-stone-400">Page speed score</p>
      </motion.div>
    </motion.div>
  )
}
