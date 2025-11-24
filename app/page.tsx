import { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Shristi Properties - Home',
  description: 'Welcome to Shristi Properties. Explore our premium real estate portfolio with modern designs and exceptional locations.',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </div>
  )
}
