import { cn } from '@/lib/utils'

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <rect width="40" height="40" rx="11" className="fill-stone-900 dark:fill-white" />
        <path
          d="M20 8C20 8 27 14.5 27 21.5C27 26.194 23.866 30 20 30C16.134 30 13 26.194 13 21.5C13 14.5 20 8 20 8Z"
          fill="url(#oakline-leaf)"
        />
        <path d="M20 30V16" stroke="currentColor" className="text-stone-900/40 dark:text-white/40" strokeWidth="1.4" strokeLinecap="round" />
        <defs>
          <linearGradient id="oakline-leaf" x1="13" y1="8" x2="27" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75CFA9" />
            <stop offset="1" stopColor="#187A57" />
          </linearGradient>
        </defs>
      </svg>
      {showWordmark ? (
        <span className="font-display text-lg font-bold tracking-tight text-stone-900 dark:text-white">
          Oakline <span className="text-brand-600 dark:text-brand-300">Digital</span>
        </span>
      ) : null}
    </span>
  )
}
