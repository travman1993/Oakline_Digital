import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-700 dark:border-brand-300/20 dark:bg-brand-400/10 dark:text-brand-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
