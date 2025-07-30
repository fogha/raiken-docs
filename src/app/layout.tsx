import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arten Documentation - AI-Powered Test Automation',
  description: 'Official documentation for Arten, an AI-powered test automation tool that combines artificial intelligence with Playwright for modern web application testing.',
  keywords: ['arten', 'testing', 'automation', 'playwright', 'AI', 'documentation'],
  authors: [{ name: 'Arten Team' }],
  creator: 'Arten',
  publisher: 'Arten',
  openGraph: {
    title: 'Arten Documentation',
    description: 'AI-powered test automation tool documentation',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arten Documentation',
    description: 'AI-powered test automation tool documentation',
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
