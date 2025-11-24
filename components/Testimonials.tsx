'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    content: 'Shristi Properties made finding my dream home effortless. The team was professional and responsive throughout the process.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Business Owner',
    content: 'Excellent service and outstanding property selection. I found the perfect investment property for my portfolio.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Software Engineer',
    content: 'Professional, transparent, and customer-focused. Highly recommend Shristi Properties to anyone looking for real estate solutions.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
  },
  {
    id: 4,
    name: 'Neha Sharma',
    role: 'Entrepreneur',
    content: 'Outstanding experience from start to finish. The property management team is responsive and helpful.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Shristi Properties.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-gold text-2xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-lg text-gray-700 italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-accent-gold' : 'bg-gray-300'
                    }`}
                    style={{ width: index === currentIndex ? '24px' : '8px' }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent-gold text-gray-900 hover:text-white transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent-gold text-gray-900 hover:text-white transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
