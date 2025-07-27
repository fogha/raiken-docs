'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  BookOpen, 
  Github,
  ExternalLink
} from 'lucide-react'

const navigation = [
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Guides', href: '/guides' },
  { name: 'API Reference', href: '/api' },
  { name: 'Examples', href: '/examples' },
  { name: 'Changelog', href: '/changelog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded bg-gradient-to-r from-primary/20 to-muted-foreground/20 opacity-75 blur"></div>
              <div className="relative rounded bg-card px-3 py-1 text-sm font-bold text-foreground border">
                Arten
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Docs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/fogha/arten" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            
            <Link href="/getting-started" className="hidden sm:inline-flex">
              <Button size="sm">
                Get Started
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4">
                <Link
                  href="https://github.com/fogha/arten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="/getting-started"
                  className="flex items-center px-3 py-2 text-base font-medium text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 