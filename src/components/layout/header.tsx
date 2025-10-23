'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/ui/brand-logo'
import { mainNavigation, quickLinks, isActiveLink } from '@/lib/navigation'
import { 
  Menu, 
  X, 
  BookOpen, 
  Github,
  ExternalLink,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const pathname = usePathname()
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
          {/* Logo */}
          <BrandLogo size="md" />

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {mainNavigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    isActiveLink(item.href, pathname)
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 ${
                      isActiveLink(item.href, pathname) ? 'w-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300' : 'w-0'
                    }`}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-3">
            {quickLinks.filter(link => link.name === 'GitHub').map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="hidden sm:inline-flex"
                >
                  <Button variant="ghost" size="sm" className="group">
                    {link.icon && <link.icon className="h-4 w-4 group-hover:text-primary transition-colors" />}
                    <span className="sr-only">{link.name}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
            
            {quickLinks.filter(link => link.name === 'Get Started').map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href} className="hidden sm:inline-flex">
                  <Button size="sm" className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-blue-600 border-0">
                    {link.name}
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            ))}

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
                {mainNavigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-md transition-all ${
                        isActiveLink(item.href, pathname)
                          ? 'text-foreground bg-muted/50'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
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
                  {quickLinks.filter(link => ['GitHub', 'Get Started'].includes(link.name)).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-all ${
                        link.name === 'Get Started' 
                          ? 'text-primary hover:bg-primary/10' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon && <link.icon className="mr-3 h-5 w-5" />}
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 