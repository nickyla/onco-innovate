'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import Features from '@/components/Features'
import CTASection from '@/components/CTASection'
import ComplianceSection from '@/components/ComplianceSection'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 oncology-pattern opacity-30" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <ProductGrid />
        <Features />
        <ComplianceSection />
        <CTASection />
      </motion.div>
    </div>
  )
}