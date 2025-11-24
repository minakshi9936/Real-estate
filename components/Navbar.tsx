'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/SP-logo.png"
                alt="Shristi Properties Logo"
                width={90}
                height={90}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className="text-bold text-white hover:text-accent-gold transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <motion.button
              className="bg-accent-gold text-white px-6 py-2 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pb-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className="text-white text-bold hover:text-accent-gold font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <button className="w-full bg-accent-gold text-white px-6 py-2 rounded-lg font-medium mt-2">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
