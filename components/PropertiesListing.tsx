'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getAllProperties } from '@/lib/properties'

export default function PropertiesListing() {
  const allProperties = getAllProperties()
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  const [selectedType, setSelectedType] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500000000])

  const propertyTypes = ['all', ...new Set(allProperties.map((p) => p.propertyType))]

  const handleTypeFilter = (type: string) => {
    setSelectedType(type)
    filterProperties(type, priceRange)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value)
    setPriceRange([priceRange[0], newMax])
    filterProperties(selectedType, [priceRange[0], newMax])
  }

  const filterProperties = (type: string, price: number[]) => {
    let filtered = allProperties

    if (type !== 'all') {
      filtered = filtered.filter((p) => p.propertyType === type)
    }

    filtered = filtered.filter((p) => p.price <= price[1])
    setFilteredProperties(filtered)
  }

  return (
    <div className="container-custom py-12">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Our Properties
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Type Filter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Property Type</h3>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => handleTypeFilter(type)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors capitalize ${
                    selectedType === type
                      ? 'bg-accent-gold text-white font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="500000000"
                step="10000000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="text-gray-700 font-semibold">
                Up to ₹{(priceRange[1] / 10000000).toFixed(1)}Cr
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="md:col-span-1 flex items-end">
            <div className="w-full text-right">
              <p className="text-gray-700 font-semibold">
                {filteredProperties.length} Results
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Properties Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            className="bg-white rounded-xl overflow-hidden shadow-premium hover:shadow-hover transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-64 overflow-hidden group">
              <img
                src={property.imageURL}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-accent-gold text-white px-4 py-2 rounded-lg font-bold">
                ₹{(property.price / 10000000).toFixed(1)}Cr
              </div>
              <div className="absolute top-4 left-4 bg-accent-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
                {property.propertyType}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {property.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {property.description}
              </p>

              <div className="flex items-center text-gray-700 mb-4 text-sm">
                <span>📍 {property.location}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-b border-gray-200 text-center">
                <div>
                  <p className="text-gray-600 text-xs">Area</p>
                  <p className="font-bold text-gray-900 text-sm">
                    {property.area}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Beds</p>
                  <p className="font-bold text-gray-900 text-sm">
                    {property.bedrooms}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Baths</p>
                  <p className="font-bold text-gray-900 text-sm">
                    {property.bathrooms}
                  </p>
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

      {filteredProperties.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-xl text-gray-600">
            No properties found matching your criteria.
          </p>
        </motion.div>
      )}
    </div>
  )
}
