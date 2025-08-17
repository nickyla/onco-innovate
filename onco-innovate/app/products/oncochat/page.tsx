'use client'

import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Brain, 
  Shield,
  Users,
  ArrowRight,
  Zap,
  Lock,
  Globe,
  Clock,
  Database,
  TrendingUp,
  HeartHandshake
} from 'lucide-react'
import Link from 'next/link'
import DemoRequestModal from '@/components/DemoRequestModal'
import { useState } from 'react'

export default function OncoChat() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced NLP trained on oncology data, clinical guidelines, and regulatory frameworks.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'HIPAA-compliant, end-to-end encryption with on-premise deployment options.'
    },
    {
      icon: Database,
      title: 'Knowledge Integration',
      description: 'Seamlessly connects with your internal databases, CRM, and knowledge bases.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Instant responses any time, reducing downtime and accelerating decision-making.'
    }
  ]

  const useCases = [
    {
      title: 'Drug Interactions',
      description: 'Instant checks for contraindications and drug-drug interactions in oncology regimens.',
      icon: '💊'
    },
    {
      title: 'Clinical Guidelines',
      description: 'Real-time access to NCCN, ASCO, and institutional treatment protocols.',
      icon: '📋'
    },
    {
      title: 'Regulatory Queries',
      description: 'Navigate FDA regulations, clinical trial requirements, and compliance issues.',
      icon: '⚖️'
    },
    {
      title: 'Adverse Event Reporting',
      description: 'Streamlined AE documentation and reporting guidance per FDA requirements.',
      icon: '⚠️'
    },
    {
      title: 'Sales Enablement',
      description: 'Instant access to product information, competitive intelligence, and objection handling.',
      icon: '📈'
    },
    {
      title: 'Team Collaboration',
      description: 'Share insights, coordinate trials, and maintain institutional knowledge.',
      icon: '👥'
    }
  ]

  const benefits = [
    'Reduce response time from hours to seconds',
    'Decrease training costs by 70%',
    'Improve compliance accuracy to 99.9%',
    'Available in 15+ languages',
    'Integrate with Salesforce, Veeva, and more',
    'Custom training on your proprietary data'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Intelligent Oncology Assistant
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
                OncoChat: <span className="gradient-text">In-House AI Chatbot</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Secure, customizable AI chatbot tailored for oncology and pharma teams. 
                Get instant answers on drug interactions, clinical guidelines, and regulatory 
                queries while maintaining strict data security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">&lt;1s</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                {/* Chat Interface Mock */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0" />
                    <div className="bg-white p-3 rounded-lg flex-1">
                      <p className="text-sm text-gray-700">What are the drug interactions for pembrolizumab?</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg flex-1">
                      <p className="text-sm text-gray-700">
                        Pembrolizumab has minimal drug-drug interactions. Key considerations include:
                        • Avoid with immunosuppressants
                        • Monitor with corticosteroids...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Endless <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OncoChat adapts to your team's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Enterprise-Grade <span className="gradient-text">Features</span>
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
                  <div className="p-3 bg-green-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-green-600" />
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

      {/* Integration Partners */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-gray-600">Works with your existing tech stack</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Salesforce', 'Veeva', 'Microsoft Teams', 'Slack', 'Epic', 'Cerner'].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-8 py-4 bg-gray-50 rounded-lg text-gray-700 font-semibold"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Empower Your Team
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
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HeartHandshake className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Your Team's <span className="gradient-text">AI Partner</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of oncology professionals using OncoChat daily
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName="OncoChat: In-House AI Chatbot"
      />
    </>
  )
}