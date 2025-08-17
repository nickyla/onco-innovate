'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  FileSearch, 
  MessageSquare, 
  Activity,
  ArrowRight,
  Zap,
  Shield,
  BarChart
} from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 'nfc-sell-sheets',
    title: 'NFC-Enabled Dynamic Sell Sheets',
    description: 'Revolutionary mobile tool for pharma field sales. Share comprehensive product info, billing guides, and marketing materials instantly with a simple NFC tap.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: ['Instant sharing', 'HIPAA compliant', 'Real-time updates'],
    stats: { efficiency: '+85%', time: '-60%' },
    href: '/products/nfc-sell-sheets'
  },
  {
    id: 'contract-analyzer',
    title: 'AI Contract Analyzer',
    description: 'AI-powered pharmaceutical contract analysis. Scan for 15 critical elements, detect risks, and get smart recommendations in seconds.',
    icon: FileSearch,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: ['Risk detection', 'FDA compliance', 'AI recommendations'],
    stats: { accuracy: '99%', time: '-85%' },
    href: '/products/contract-analyzer',
    isLive: true,
    downloadLink: '/Users/nickylasecki/ai-contract-analyzer/dist/AI Contract Analyzer-1.0.0-universal-mac.zip'
  },

  {
    id: 'oncochat',
    title: 'OncoChat: In-House AI Chatbot',
    description: 'Secure, customizable chatbot for oncology teams. Get instant answers on drug interactions, clinical guidelines, and regulatory queries 24/7.',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: ['24/7 support', 'Knowledge base', 'CRM integration'],
    stats: { responses: '< 1s', uptime: '99.9%' },
    href: '/products/oncochat'
  },
  {
    id: 'trial-simulator',
    title: 'Clinical Trial Simulator',
    description: 'Our flagship genomic AI tool. Simulate trial outcomes, predict success rates, and optimize patient matching with probabilistic modeling.',
    icon: Activity,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    features: ['Genomic profiling', 'Real-time data', 'ROI forecasting'],
    stats: { trials: '500+', savings: '$2M+' },
    href: '/products/trial-simulator'
  }
]

export default function ProductGrid() {
  return (
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
            Our <span className="gradient-text">AI-Powered</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge tools designed specifically for oncology and pharma professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={product.href}>
                <div className={`group relative h-full p-8 rounded-2xl border-2 ${product.borderColor} ${product.bgColor} overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${product.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white/80 backdrop-blur text-sm rounded-full text-gray-700"
                      >
                        <Zap className="w-3 h-3 text-yellow-500" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold group-hover:text-primary-700">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Badge for flagship product */}
                  {product.id === 'trial-simulator' && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                        <Shield className="w-3 h-3" />
                        FLAGSHIP
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200">
            <BarChart className="w-6 h-6 text-primary-600" />
            <span className="text-lg font-semibold text-gray-800">
              Need a custom solution?
            </span>
            <Link
              href="/custom-solutions"
              className="ml-4 inline-flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}