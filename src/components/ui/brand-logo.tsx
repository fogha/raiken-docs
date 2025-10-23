'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showDocs?: boolean
  className?: string
}

export function BrandLogo({ size = 'md', showDocs = true, className = '' }: BrandLogoProps) {
  const sizes = {
    sm: {
      icon: 'h-4 w-4',
      text: 'text-base',
      padding: 'px-3 py-1.5',
      docs: 'text-xs'
    },
    md: {
      icon: 'h-4 w-4',
      text: 'text-lg',
      padding: 'px-4 py-2',
      docs: 'text-sm'
    },
    lg: {
      icon: 'h-5 w-5',
      text: 'text-xl',
      padding: 'px-4 py-2',
      docs: 'text-base'
    }
  }

  const sizeConfig = sizes[size]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={className}
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
          <div className={`relative rounded-lg bg-card/80 backdrop-blur-sm ${sizeConfig.padding} border border-border/50 group-hover:border-primary/50 transition-colors`}>
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className={`${sizeConfig.icon} text-primary`} />
              </motion.div>
              <span className={`${sizeConfig.text} font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent`}>
                Raiken
              </span>
            </div>
          </div>
        </div>
        {showDocs && (
          <motion.span 
            className={`${sizeConfig.docs} font-medium text-muted-foreground group-hover:text-primary transition-colors`}
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            Docs
          </motion.span>
        )}
      </Link>
    </motion.div>
  )
}
