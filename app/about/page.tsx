import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import StatsSection from '@/components/StatsSection'
import MissionVision from '@/components/MissionVision'

export const metadata: Metadata = {
  title: 'About Us - Shristi Properties',
  description: 'Learn about Shristi Properties. Discover our mission, vision, and commitment to excellence in real estate.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <StatsSection />
      <MissionVision />
    </div>
  )
}
