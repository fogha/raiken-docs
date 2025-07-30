'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  BookOpen, 
  Github,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Guides', href: '/guides' },
  { name: 'API Reference', href: '/api' },
  { name: 'Examples', href: '/examples' },
  { name: 'Contributing', href: '/contributing' },
  { name: 'Changelog', href: '/changelog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'border-b bg-background/80 backdrop-blur-xl shadow-lg' 
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <motion.div 
                  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 via-blue-500/30 to-purple-500/30 opacity-75 blur-sm group-hover:opacity-100 transition-opacity"
                  animate={{
                    background: [
                      "linear-gradient(to right, rgb(var(--primary)/0.3), rgb(59 130 246/0.3), rgb(168 85 247/0.3))",
                      "linear-gradient(to right, rgb(168 85 247/0.3), rgb(var(--primary)/0.3), rgb(59 130 246/0.3))",
                      "linear-gradient(to right, rgb(59 130 246/0.3), rgb(168 85 247/0.3), rgb(var(--primary)/0.3))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative rounded-lg bg-card/80 backdrop-blur-sm px-4 py-2 border border-border/50 group-hover:border-primary/50 transition-colors">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      Arten
                    </span>
                  </div>
                </div>
              </div>
              <motion.span 
                className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                Docs
              </motion.span>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://github.com/fogha/arten" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button variant="ghost" size="sm" className="group">
                  <Github className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/getting-started" className="hidden sm:inline-flex">
                <Button size="sm" className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-blue-600 border-0">
                  Get Started
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>

            {/* Enhanced Mobile menu button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="space-y-1 pb-4 pt-2 bg-card/50 backdrop-blur-sm rounded-lg mt-2 border border-border/50"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="border-t border-border/50 pt-4 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    href="https://github.com/fogha/arten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
                  >
                    <Github className="mr-3 h-5 w-5" />
                    GitHub
                  </Link>
                  <Link
                    href="/getting-started"
                    className="flex items-center px-4 py-3 text-base font-medium text-primary hover:bg-primary/10 rounded-md transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <BookOpen className="mr-3 h-5 w-5" />
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 