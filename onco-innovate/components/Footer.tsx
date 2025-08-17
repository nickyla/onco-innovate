import Link from 'next/link'
import { 
  Dna, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Shield
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">OncoInnovate</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing oncology through cutting-edge AI solutions. 
              Empowering precision care for maximum efficiency and patient impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/nfc-sell-sheets" className="text-gray-400 hover:text-white transition-colors text-sm">
                  NFC-Enabled Sell Sheets
                </Link>
              </li>
              <li>
                <Link href="/products/contract-analyzer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Contract Analyzer
                </Link>
              </li>
              <li>
                <Link href="/products/oncochat" className="text-gray-400 hover:text-white transition-colors text-sm">
                  OncoChat
                </Link>
              </li>
              <li>
                <Link href="/products/trial-simulator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Clinical Trial Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/custom-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">info@oncoinnovate.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">1-800-ONCO-AI</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Boston, MA 02115</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2 text-primary-400">Regulatory Compliance Statement</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All tools and simulations are designed for informational and efficiency purposes only, 
                  adhering to FDA guidelines for software as a tool (not a medical device). Consult 
                  regulatory experts for production use. OncoInnovate prioritizes ethical AI deployment 
                  in healthcare. We maintain strict HIPAA compliance and ensure no storage of sensitive 
                  patient data. Our solutions comply with FDA/EMA regulations, GDPR, and all applicable 
                  healthcare data privacy laws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 OncoInnovate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors text-sm">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}