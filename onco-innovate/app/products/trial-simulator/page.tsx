'use client'

import { motion } from 'framer-motion'
import { 
  Activity, 
  Brain, 
  BarChart3,
  Users,
  ArrowRight,
  Dna,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Microscope,
  Award
} from 'lucide-react'
import Link from 'next/link'
import DemoRequestModal from '@/components/DemoRequestModal'
import { useState } from 'react'

export default function TrialSimulator() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const features = [
    {
      icon: Dna,
      title: 'Genomic Profiling',
      description: 'Integrate patient genomic data to predict treatment responses and optimize cohort selection.'
    },
    {
      icon: Brain,
      title: 'Probabilistic Modeling',
      description: 'Advanced ML algorithms using StatsModels and SymPy for accurate outcome predictions.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Data',
      description: 'Pull live data from ClinicalTrials.gov for recruitment optimization and competitive intelligence.'
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'AI-powered patient-trial matching based on genomic markers and clinical criteria.'
    }
  ]

  const metrics = [
    { label: 'Success Rate Prediction', value: '94%', icon: Award },
    { label: 'Cost Reduction', value: '40%', icon: DollarSign },
    { label: 'Timeline Acceleration', value: '35%', icon: Clock },
    { label: 'Patient Matching', value: '3x', icon: Users }
  ]

  const capabilities = [
    'Simulate multiple treatment arms simultaneously',
    'Predict enrollment rates and dropout probabilities',
    'Forecast efficacy endpoints and safety profiles',
    'Optimize site selection and resource allocation',
    'Generate regulatory-ready documentation',
    'Compare against historical trial data'
  ]

  const scenarios = [
    {
      title: 'Dose Optimization',
      description: 'Model dose-response curves to identify optimal dosing regimens before Phase II.',
      savings: '$5M saved'
    },
    {
      title: 'Patient Stratification',
      description: 'Identify biomarker-defined subpopulations most likely to respond to treatment.',
      savings: '6 months faster'
    },
    {
      title: 'Site Selection',
      description: 'Predict recruitment rates across different sites to optimize trial logistics.',
      savings: '80% accuracy'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        
        {/* Animated DNA strands */}
        <motion.div
          className="absolute top-10 left-10 text-orange-200 opacity-30"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Dna className="w-40 h-40" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                Flagship Product
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
                Clinical Trial <span className="gradient-text">Simulator</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Our flagship genomic AI tool for oncology trial optimization. Leverage probabilistic 
                modeling to simulate outcomes, predict success rates, and optimize patient matching 
                in precision oncology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-600">Trials Optimized</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">$2M+</div>
                  <div className="text-sm text-gray-600">Average Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">40%</div>
                  <div className="text-sm text-gray-600">Time Reduction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                {/* Simulation Visualization */}
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
                  <div className="h-full flex flex-col justify-between">
                    <div className="text-sm font-semibold text-gray-700">Trial Success Probability</div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-6xl font-bold gradient-text">94%</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white/80 rounded p-2 text-center">
                        <div className="font-semibold">Enrollment</div>
                        <div className="text-green-600">On Track</div>
                      </div>
                      <div className="bg-white/80 rounded p-2 text-center">
                        <div className="font-semibold">Efficacy</div>
                        <div className="text-green-600">High</div>
                      </div>
                      <div className="bg-white/80 rounded p-2 text-center">
                        <div className="font-semibold">Safety</div>
                        <div className="text-green-600">Good</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
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
              Proven <span className="gradient-text">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full mb-4">
                  <metric.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Advanced <span className="gradient-text">Capabilities</span>
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
                className="flex gap-4 p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-orange-600" />
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

      {/* Simulation Capabilities */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              What You Can <span className="gradient-text">Simulate</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200"
              >
                <Microscope className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
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
              Real-World <span className="gradient-text">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-3">{scenario.title}</h3>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {scenario.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Activity className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Design Smarter Trials, Faster
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading pharma companies using AI to revolutionize clinical trial design
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Start Simulating Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-sm opacity-75">
              Reduce trial costs by up to 40% • Accelerate timelines by 35%
            </p>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName="Clinical Trial Simulator Powered by Genomic AI"
      />
    </>
  )
}