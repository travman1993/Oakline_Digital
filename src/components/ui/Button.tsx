import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-stone-900 text-white shadow-lg shadow-stone-900/10 hover:bg-brand-700 hover:shadow-brand-600/20 dark:bg-white dark:text-stone-900 dark:hover:bg-brand-300',
  secondary:
    'border border-stone-300 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
  ghost: 'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-white/10',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function buttonVariants(opts: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  const { variant = 'primary', size = 'md', className } = opts
  return cn(base, variants[variant], sizes[size], className)
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({ variant, size, className, ...rest }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...rest} />
}
