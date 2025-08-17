'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, FileCheck } from 'lucide-react'

const certifications = [
  { name: 'HIPAA Compliant', icon: Shield },
  { name: 'FDA Guidelines', icon: FileCheck },
  { name: 'ISO 27001', icon: Award },
  { name: 'GDPR Ready', icon: CheckCircle },
]

export default function ComplianceSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Regulatory Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built for <span className="gradient-text">Healthcare Compliance</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                OncoInnovate adheres to the highest standards of regulatory compliance. 
                All our tools are designed as informational and efficiency solutions, 
                following FDA guidelines for software tools (not medical devices). 
                We prioritize ethical AI deployment and maintain strict data privacy standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <cert.icon className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-3xl opacity-20" />
                <div className="relative bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
                  <Shield className="w-24 h-24 mb-4 mx-auto" />
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm opacity-90">Compliant</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}