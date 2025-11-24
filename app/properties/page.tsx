import { Metadata } from 'next'
import PropertiesListing from '@/components/PropertiesListing'

export const metadata: Metadata = {
  title: 'Properties - Shristi Properties',
  description: 'Browse our complete collection of premium properties. Find your perfect home with Shristi Properties.',
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16">
        <PropertiesListing />
      </div>
    </div>
  )
}
