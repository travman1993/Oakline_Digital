import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <Container className="flex min-h-screen flex-col items-center justify-center py-32 text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-white">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-stone-600 dark:text-stone-400">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
          Back to home <ArrowRight size={18} />
        </Link>
      </Container>
    </>
  )
}
