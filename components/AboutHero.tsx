'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-accent-navy to-gray-900 text-white pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Shristi Properties
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We are committed to providing premium real estate solutions with integrity, transparency, and excellence. Our mission is to help you find not just a property, but your dream home.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-accent-gold">15+</p>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-accent-gold">500+</p>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-4xl font-bold text-accent-gold">1000+</p>
              <p className="text-gray-300">Properties Sold</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
