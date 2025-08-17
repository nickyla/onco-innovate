'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronDown,
  Dna,
  Home,
  Package,
  Mail,
  Sparkles
} from 'lucide-react'

const products = [
  { name: 'NFC-Enabled Sell Sheets', href: '/products/nfc-sell-sheets' },
  { name: 'AI Contract Analyzer', href: '/products/contract-analyzer' },
  { name: 'OncoChat', href: '/products/oncochat' },
  { name: 'Clinical Trial Simulator', href: '/products/trial-simulator' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur-lg opacity-50" />
              <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                <Dna className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-gray-900">Onco</span>
              <span className="gradient-text">Innovate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Package className="w-4 h-4" />
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200">
                      <Link
                        href="/custom-solutions"
                        className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Custom AI Solutions</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500">Products</div>
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block pl-8 pr-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/custom-solutions"
                className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-accent-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Custom AI Solutions
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center rounded-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}