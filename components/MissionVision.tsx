'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To provide transparent, reliable, and customer-focused real estate services that help individuals and families find their dream properties. We believe in building lasting relationships with our clients through honest communication and exceptional service.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent-gold font-bold mr-3">✓</span>
                <span className="text-gray-700">Transparent pricing and deals</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-gold font-bold mr-3">✓</span>
                <span className="text-gray-700">Expert property consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-gold font-bold mr-3">✓</span>
                <span className="text-gray-700">24/7 customer support</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To become the most trusted and innovative real estate company, known for delivering premium properties and exceptional customer experiences. We envision a future where finding the perfect property is seamless and accessible to everyone.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent-gold font-bold mr-3">✓</span>
                <span className="text-gray-700">Premium property portfolio</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-gold font-bold mr-3">✓</span>
                <span className="text-gray-700">Innovation in real estate</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-gold font-bold mr-3">✓</span>
                <span className="text-gray-700">Community growth and development</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We operate with honesty and transparency in all our dealings.',
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service.',
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction and success is our top priority.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-premium text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold text-accent-navy mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
