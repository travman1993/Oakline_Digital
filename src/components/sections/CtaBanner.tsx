import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { buttonVariants } from '@/components/ui/Button'

export function CtaBanner({
  title = 'Ready to grow your business online?',
  description = 'Request a free consultation and let’s talk about what a modern website could do for you.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-stone-900 px-8 py-16 text-center shadow-2xl dark:bg-white/5 sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-stone-300">{description}</p>
          <div className="relative mt-8 flex justify-center">
            <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
              Request a Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
