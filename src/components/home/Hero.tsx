import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { PhoneMockup } from '@/components/home/PhoneMockup'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="noise-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-[120px] dark:bg-brand-600/20" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <Badge>
              <Sparkles size={13} /> Trusted by local businesses everywhere
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Helping Local Businesses <span className="text-gradient">Grow Online.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 lg:mx-0 dark:text-stone-400"
          >
            We design fast, modern websites that help businesses build trust, attract customers, and grow
            online — with transparent pricing and no confusing tech jargon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
              Request a Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              View Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 text-sm text-stone-500 lg:justify-start dark:text-stone-400"
          >
            <span>✓ You own your website</span>
            <span className="hidden sm:inline">✓ No lock-in contracts</span>
            <span className="hidden md:inline">✓ Mobile-first design</span>
          </motion.div>
        </div>

        <PhoneMockup />
      </Container>
    </section>
  )
}
