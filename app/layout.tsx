import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shristi Properties - Premium Real Estate Solutions',
  description: 'Discover premium properties and real estate solutions with Shristi Properties. Modern designs, excellent locations, and exceptional value.',
  keywords: 'real estate, properties, homes, apartments, luxury properties',
  authors: [{ name: 'Shristi Properties' }],
  openGraph: {
    title: 'Shristi Properties - Premium Real Estate',
    description: 'Discover premium properties and real estate solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
