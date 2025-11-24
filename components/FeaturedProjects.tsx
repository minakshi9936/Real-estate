'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getAllProperties } from '@/lib/properties'

export default function FeaturedProjects() {
  const properties = getAllProperties().slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="rounded-xl overflow-hidden bg-white shadow-premium hover:shadow-hover transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.imageURL}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent-gold text-white px-4 py-2 rounded-lg font-bold">
                  ₹{(property.price / 10000000).toFixed(1)}Cr
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex items-center text-gray-700 mb-4">
                  <span className="text-sm">📍 {property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-200">
                  <div>
                    <p className="text-gray-600 text-sm">Area</p>
                    <p className="font-bold text-gray-900">{property.area} sqft</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Bedrooms</p>
                    <p className="font-bold text-gray-900">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Bathrooms</p>
                    <p className="font-bold text-gray-900">{property.bathrooms}</p>
                  </div>
                </div>

                <Link href={`/properties/${property.id}`}>
                  <motion.button
                    className="w-full bg-accent-navy text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/properties">
            <motion.button
              className="bg-accent-gold text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Properties
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
