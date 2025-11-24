import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us - Shristi Properties',
  description: 'Get in touch with Shristi Properties. We are here to help you find your perfect property.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container-custom pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
