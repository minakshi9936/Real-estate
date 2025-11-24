'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-navy to-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to help you navigate the real estate market and find the perfect property that matches your needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/properties">
              <motion.button
                className="bg-accent-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Properties
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                className="bg-white hover:bg-gray-100 text-accent-navy px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
