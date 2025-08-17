'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Brain, Download, Check, Star, TrendingUp, Users, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function ContractAnalyzerPage() {
  const [selectedPlan, setSelectedPlan] = useState('professional')

  const plans = [
    {
      id: 'trial',
      name: 'Free Trial',
      price: '$0',
      period: '14 days',
      features: [
        '10 contract analyses',
        'Basic AI insights',
        'PDF export',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '$49',
      period: '/month',
      features: [
        '100 analyses/month',
        'Enhanced AI insights',
        'PDF & Word export',
        'Priority support',
        'Chat with contracts'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        '500 analyses/month',
        'Advanced AI with sources',
        'All export formats',
        'API access',
        'Custom elements',
        'Compliance tracking',
        'Priority support'
      ],
      cta: 'Go Professional',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited analyses',
        'White-label option',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Training included',
        'Multi-user access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const stats = [
    { label: 'Contracts Analyzed', value: '10,000+', icon: FileText },
    { label: 'Time Saved', value: '85%', icon: Clock },
    { label: 'Risk Detection', value: '99%', icon: Shield },
    { label: 'ROI', value: '12x', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5" />
              <span className="font-medium">AI-Powered Analysis</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              AI Contract Analyzer
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Analyze pharmaceutical contracts in seconds, not hours. 
              Detect risks, ensure compliance, and optimize terms with advanced AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/downloads/AI Contract Analyzer-1.0.0-universal-mac.zip"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download for Mac
              </a>
              <button className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-purple-600 mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Built for Pharmaceutical Companies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15 Critical Elements</h3>
              <p className="text-gray-600">
                Automatically scans for IP clauses, FDA compliance, pricing structures, and more
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Detection</h3>
              <p className="text-gray-600">
                AI identifies hidden risks, ambiguous terms, and compliance gaps instantly
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Get AI-powered suggestions to strengthen terms and optimize agreements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Start with a free trial, upgrade anytime
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-white rounded-2xl p-6 shadow-lg ${
                  plan.popular ? 'ring-2 ring-purple-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Contract Analysis?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of pharmaceutical companies saving time and reducing risk
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/AI Contract Analyzer-1.0.0-universal-mac.zip"
              download
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Now - Mac Universal
            </a>
            <button className="inline-flex items-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all">
              <Users className="w-5 h-5" />
              Schedule Demo
            </button>
          </div>
          
          <p className="text-purple-200 mt-6 text-sm">
            Works on all Mac computers (Intel & Apple Silicon) • Windows version coming soon
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Pharma Companies</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-gray-700 ml-2">4.9/5 from 200+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "Cut our contract review time by 85%. The AI catches risks we used to miss."
              </p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-gray-600">Legal Director, PharmaCorp</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "Essential tool for portfolio agreements. Saved us from major compliance issues."
              </p>
              <div className="font-semibold">Michael Torres</div>
              <div className="text-sm text-gray-600">VP Partnerships, BioVentures</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "ROI was immediate. Paid for itself in the first week of use."
              </p>
              <div className="font-semibold">Jennifer Park</div>
              <div className="text-sm text-gray-600">Contract Manager, MedTech Inc</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}