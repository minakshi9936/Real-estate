'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { getPropertyById } from '@/lib/properties'
import ContactForm from './ContactForm'

export default function PropertyDetails({ propertyId }: { propertyId: number }) {
  const property = getPropertyById(propertyId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-700">Property not found</p>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.gallery.length - 1 : prev - 1
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a href="/properties" className="hover:text-accent-gold">
            Properties
          </a>
          {' / '}
          <span className="text-accent-gold font-semibold">{property.title}</span>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl mb-4 bg-gray-200">
              <img
                src={property.gallery[currentImageIndex]}
                alt={`Property image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {property.gallery.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ←
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    →
                  </motion.button>
                </>
              )}

              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {property.gallery.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {property.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.gallery.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-accent-gold'
                        : 'border-gray-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}

            {/* Property Info */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>

              <p className="text-xl text-accent-gold font-bold mb-4">
                ₹{(property.price / 10000000).toFixed(2)}Cr
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {property.description}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 bg-gray-50 rounded-xl p-6 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Area</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {property.area} sqft
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Bedrooms</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {property.bedrooms}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Bathrooms</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {property.bathrooms}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Type</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {property.propertyType}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-accent-gold text-xl mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Location Card */}
              <div className="bg-white rounded-xl p-6 shadow-premium">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  📍 Location
                </h3>
                <p className="text-gray-700 font-semibold">{property.location}</p>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-premium">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Inquiry Form
                </h3>
                <ContactForm propertyId={propertyId} />
              </div>

              {/* Call to Action */}
              <motion.button
                className="w-full bg-accent-gold text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
