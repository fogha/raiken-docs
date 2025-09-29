import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raiken Documentation - AI-Powered Test Automation',
  description: 'Official documentation for Raiken, an AI-powered test automation platform with advanced test editor, visual test builder, and comprehensive test management.',
  keywords: ['raiken', 'testing', 'automation', 'AI', 'test-editor', 'test-builder', 'documentation'],
  authors: [{ name: 'Raiken Team' }],
  creator: 'Raiken',
  publisher: 'Raiken',
  openGraph: {
    title: 'Raiken Documentation',
    description: 'AI-powered test automation platform documentation',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raiken Documentation',
    description: 'AI-powered test automation platform documentation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
