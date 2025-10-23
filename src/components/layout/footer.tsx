'use client'

import Link from 'next/link'
import { Github, Twitter, ExternalLink, Heart, ArrowUp } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/ui/brand-logo'
import { footerNavigation } from '@/lib/navigation'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Enhanced Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <BrandLogo size="lg" showDocs={false} />
            <motion.span 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors ml-3"
              variants={itemVariants}
            >
              Documentation
            </motion.span>
            
            <motion.p 
              className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              AI-powered test automation tool that combines{' '}
              <span className="text-primary font-medium">artificial intelligence</span> with{' '}
              <span className="text-blue-500 font-medium">Playwright</span> for modern web application testing.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex space-x-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://github.com/fogha/raiken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all border border-border/50 hover:border-primary/50"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://github.com/fogha/raiken/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-blue-500/20 text-muted-foreground hover:text-blue-500 transition-all border border-border/50 hover:border-blue-500/50"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Discussions</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Navigation Sections */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2" />
              Documentation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.documentation.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <motion.span
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      →
                    </motion.span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
              Guides
            </h3>
            <ul className="space-y-3">
              {footerNavigation.guides.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center group"
                  >
                    <motion.span
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      →
                    </motion.span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-purple-500 transition-colors flex items-center group"
                  >
                    <motion.span
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      →
                    </motion.span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-16 border-t border-border/50 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <motion.p 
              className="text-sm text-muted-foreground flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              © {new Date().getFullYear()} Raiken. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-1"
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              for developers.
            </motion.p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="https://github.com/fogha/raiken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors group"
                >
                  View on GitHub
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="ml-1 h-3 w-3 group-hover:text-primary" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={scrollToTop}
            size="sm"
            className="rounded-full w-12 h-12 shadow-lg bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 border-0"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      </motion.div>
    </footer>
  )
} 