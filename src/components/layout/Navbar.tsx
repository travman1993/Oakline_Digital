import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { buttonVariants } from '@/components/ui/Button'
import { useTheme } from '@/hooks/useTheme'
import { NAV_ITEMS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'py-3' : 'py-5',
      )}
    >
      <Container>
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300',
            scrolled || open ? 'glass shadow-lg shadow-stone-900/5' : 'bg-transparent',
          )}
        >
          <NavLink to="/" className="flex items-center py-1" onClick={() => setOpen(false)}>
            <Logo />
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-700 dark:text-brand-300'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-white/10"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <NavLink to="/contact" className={buttonVariants({ size: 'md' })}>
              Free Consultation
              <ArrowRight size={16} />
            </NavLink>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 dark:text-stone-300"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-700 dark:text-stone-200"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <Container className="mt-2">
              <div className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-lg shadow-stone-900/5">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-brand-500/10 text-brand-700 dark:text-brand-300'
                          : 'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-white/10',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ className: 'mt-2 w-full' })}
                >
                  Request a Free Consultation
                </NavLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
