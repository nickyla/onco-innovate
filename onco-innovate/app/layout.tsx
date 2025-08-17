import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OncoInnovate - Revolutionizing Oncology Through AI',
  description: 'Empowering Precision Care for Maximum Efficiency and Patient Impact. Cutting-edge AI tools for oncology and pharma innovation.',
  keywords: 'AI oncology, pharma tools, clinical trials, NFC sell sheets, contract analyzer, oncology chatbot, genomic AI',
  authors: [{ name: 'OncoInnovate' }],
  openGraph: {
    title: 'OncoInnovate - Revolutionizing Oncology Through AI',
    description: 'Empowering Precision Care for Maximum Efficiency and Patient Impact',
    url: 'https://oncoinnovate.com',
    siteName: 'OncoInnovate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}