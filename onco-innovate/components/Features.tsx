'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Lock, 
  Globe,
  Brain,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'FDA Compliant',
    description: 'All solutions adhere to FDA guidelines for software tools, ensuring regulatory compliance.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process complex data in seconds, not hours. Real-time insights at your fingertips.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: Lock,
    title: 'HIPAA Secure',
    description: 'Enterprise-grade security with full HIPAA compliance. Your data is always protected.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Advanced machine learning algorithms trained on millions of oncology data points.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless integration with your existing workflows and team collaboration tools.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting to track performance and ROI.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Supporting pharma teams across 50+ countries with multi-language capabilities.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and AI assistance whenever you need it.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
]

export default function Features() {
  return (
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
            Why Choose <span className="gradient-text">OncoInnovate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by oncology experts, for oncology professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Clinical Trials Optimized</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-sm opacity-90">Cost Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-sm opacity-90">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-90">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}