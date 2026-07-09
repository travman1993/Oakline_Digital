import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import { PWASection } from '@/components/home/PWASection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { CtaBanner } from '@/components/sections/CtaBanner'

export function Home() {
  return (
    <>
      <Seo
        title="Helping Local Businesses Grow Online"
        description="Oakline Digital designs fast, modern websites that help local businesses build trust, attract customers, and grow online."
      />
      <Hero />
      <PWASection />
      <Services variant="preview" />
      <WhyChooseUs />
      <Portfolio variant="preview" />
      <Process variant="preview" />
      <div className="border-t border-stone-200 dark:border-white/10">
        <Pricing variant="preview" />
      </div>
      <div className="border-t border-stone-200 dark:border-white/10">
        <Faq variant="preview" />
      </div>
      <CtaBanner />
    </>
  )
}
