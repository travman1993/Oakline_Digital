import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { NAV_ITEMS, SERVICES } from '@/lib/data'

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-white dark:border-white/10 dark:bg-[#0a0f0d]">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500 dark:text-stone-400">
              Helping local businesses grow online with fast, modern, professional websites.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-stone-400 dark:hover:border-brand-400 dark:hover:text-brand-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900 dark:text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-stone-500 transition-colors hover:text-brand-600 dark:text-stone-400 dark:hover:text-brand-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900 dark:text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-sm text-stone-500 transition-colors hover:text-brand-600 dark:text-stone-400 dark:hover:text-brand-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-500 dark:text-stone-400">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" />
                <a href="tel:+15555550123" className="hover:text-brand-600 dark:hover:text-brand-300">
                  (555) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" />
                <a href="mailto:hello@oaklinedigital.com" className="hover:text-brand-600 dark:hover:text-brand-300">
                  hello@oaklinedigital.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" />
                <span>Serving businesses nationwide</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" />
                <span>Mon–Fri, 9am–5pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 text-sm text-stone-500 dark:border-white/10 dark:text-stone-400 sm:flex-row">
          <p>&copy; {year} Oakline Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-600 dark:hover:text-brand-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand-600 dark:hover:text-brand-300">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
