import { useState, type FormEvent, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/SocialIcons'

const SERVICE_OPTIONS = [
  'New Website',
  'Website Redesign',
  'Website Maintenance',
  'E-Commerce Website',
  'Custom Web Application',
  'Business Photography',
  'Not sure yet',
]

const CONTACT_DETAILS = [
  { icon: Phone, label: 'Phone', value: '(555) 555-0123', href: 'tel:+15555550123' },
  { icon: Mail, label: 'Email', value: 'hello@oaklinedigital.com', href: 'mailto:hello@oaklinedigital.com' },
  { icon: MapPin, label: 'Service Area', value: 'Serving local businesses nationwide', href: undefined },
]

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          description="Tell us a bit about your business and what you need. We'll respond within one business day with next steps — no pressure, no obligation."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="card-surface flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                    <detail.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="font-semibold text-stone-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-300">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-stone-900 dark:text-white">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="card-surface mt-4 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Follow along</p>
              <div className="mt-3 flex items-center gap-2">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-stone-400 dark:hover:border-brand-400 dark:hover:text-brand-300"
                  >
                    <social.icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface relative overflow-hidden rounded-3xl p-7 sm:p-9 lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-105 flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-stone-900 dark:text-white">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-stone-500 dark:text-stone-400">
                    Thanks for reaching out. We'll get back to you within one business day to schedule your free
                    consultation.
                  </p>
                  <Button variant="secondary" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="name">
                      <input id="name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
                    </Field>
                    <Field label="Business Name" htmlFor="business">
                      <input id="business" name="business" type="text" placeholder="Smith's Bakery" className={inputClass} />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Email" htmlFor="email">
                      <input id="email" name="email" type="email" required placeholder="jane@business.com" className={inputClass} />
                    </Field>
                    <Field label="Phone" htmlFor="phone">
                      <input id="phone" name="phone" type="tel" placeholder="(555) 555-0123" className={inputClass} />
                    </Field>
                  </div>

                  <Field label="What do you need help with?" htmlFor="service">
                    <select id="service" name="service" defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Tell us about your project" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="A few details about your business and what you're looking for..."
                      className={inputClass}
                    />
                  </Field>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : 'Request a Free Consultation'}
                    {!loading && <Send size={16} />}
                  </Button>
                  <p className="text-center text-xs text-stone-400">
                    This form is for demonstration purposes and does not send data anywhere.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

const inputClass =
  'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white'

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
        {label}
      </label>
      {children}
    </div>
  )
}
