import { Hero } from '@/components/landing/hero'
import { Services } from '@/components/landing/services'
import { Features } from '@/components/landing/features'
import { Testimonials } from '@/components/landing/testimonials'
import { CTA } from '@/components/landing/cta'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
