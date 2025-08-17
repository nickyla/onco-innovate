'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle,
  Wifi,
  FileText,
  TrendingUp,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import DemoRequestModal from '@/components/DemoRequestModal'
import { useState } from 'react'

export default function NFCSellSheets() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const features = [
    {
      icon: Wifi,
      title: 'Instant NFC Sharing',
      description: 'Share comprehensive product information with a simple tap - no apps or downloads required.'
    },
    {
      icon: FileText,
      title: 'Dynamic Content',
      description: 'Real-time updates ensure reps always have the latest prescribing information and marketing materials.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security ensures all shared information meets healthcare compliance standards.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track engagement metrics, view rates, and ROI to optimize your sales strategy.'
    }
  ]

  const benefits = [
    'Reduce consultation time by 60%',
    'Increase HCP engagement by 85%',
    'Eliminate outdated printed materials',
    'Track real-time engagement metrics',
    'Ensure 100% compliance with regulations',
    'Support offline access in any location'
  ]

  const useCases = [
    {
      title: 'Field Sales Meetings',
      description: 'Instantly share product overviews, clinical data, and pricing information during HCP consultations.',
      metric: '3x faster closures'
    },
    {
      title: 'Conference Networking',
      description: 'Exchange comprehensive product portfolios at medical conferences without carrying physical materials.',
      metric: '500+ leads captured'
    },
    {
      title: 'Hospital Rounds',
      description: 'Provide instant access to drug interaction guides and dosing calculators during clinical discussions.',
      metric: '90% HCP satisfaction'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4" />
                Revolutionary Sales Tool
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
                NFC-Enabled <span className="gradient-text">Dynamic Sell Sheets</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Transform pharma field sales with instant, tap-to-share product information. 
                Streamline HCP consultations, boost engagement, and accelerate deal closures 
                in high-stakes oncology environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">85%</div>
                  <div className="text-sm text-gray-600">Engagement Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">60%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">3x</div>
                  <div className="text-sm text-gray-600">Faster Closures</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and instantly effective
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Setup', desc: 'Upload your product materials to our secure platform' },
              { step: '2', title: 'Customize', desc: 'Create dynamic sell sheets with real-time content' },
              { step: '3', title: 'Share', desc: 'Tap NFC-enabled device to instantly share with HCPs' },
              { step: '4', title: 'Track', desc: 'Monitor engagement and optimize your approach' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Transform Your Sales Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Real-World <span className="gradient-text">Applications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {useCase.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Ready to <span className="gradient-text">Revolutionize</span> Your Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading pharma companies already using NFC-enabled sell sheets
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName="NFC-Enabled Dynamic Sell Sheets"
      />
    </>
  )
}