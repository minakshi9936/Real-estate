'use client'

import { motion } from 'framer-motion'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'info@shristi.com',
      link: 'mailto:info@shristi.com',
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Property Lane, City, State 12345',
      link: '#',
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ]

  return (
    <div className="space-y-4">
      {contactDetails.map((detail, index) => (
        <motion.a
          key={index}
          href={detail.link}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="block p-4 bg-white rounded-lg shadow-premium hover:shadow-hover transition-shadow"
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">{detail.icon}</span>
            <div>
              <h4 className="font-bold text-gray-900">{detail.title}</h4>
              <p className="text-gray-600 text-sm">{detail.content}</p>
            </div>
          </div>
        </motion.a>
      ))}

      {/* Social Media */}
      <motion.div
        className="mt-6 pt-6 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h4 className="font-bold text-gray-900 mb-3">Follow Us</h4>
        <div className="flex gap-2">
          {['f', 't', 'in', 'ig'].map((social, index) => (
            <motion.a
              key={social}
              href="#"
              className="w-10 h-10 bg-gray-900 hover:bg-accent-gold text-white rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
