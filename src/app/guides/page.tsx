'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Zap, Code2, Settings, GitBranch, TestTube, Clock, ChevronRight, Sparkles, TrendingUp, Brain, Rocket } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const guides = [
  {
    title: 'Getting Started with CLI',
    description: 'Install and set up the Arten CLI for your project.',
    href: '/guides/cli-setup',
    icon: <Code2 className="h-6 w-6" />,
    level: 'Beginner',
    estimatedTime: '10 min read',
    category: 'Fundamentals',
    gradient: 'from-blue-500 to-cyan-400',
    popular: true
  },
  {
    title: 'AI Test Generation',
    description: 'Generate tests from natural language descriptions using AI.',
    href: '/guides/ai-test-generation',
    icon: <Zap className="h-6 w-6" />,
    level: 'Intermediate',
    estimatedTime: '15 min read',
    category: 'AI Features',
    gradient: 'from-purple-500 to-pink-400',
    popular: true
  },
  {
    title: 'Framework Integration',
    description: 'Use Arten with different testing frameworks.',
    href: '/guides/framework-integration',
    icon: <TestTube className="h-6 w-6" />,
    level: 'Intermediate',
    estimatedTime: '20 min read',
    category: 'Integration',
    gradient: 'from-green-500 to-emerald-400'
  },
  {
    title: 'Project Configuration',
    description: 'Configure Arten for your specific project type.',
    href: '/guides/configuration',
    icon: <Settings className="h-6 w-6" />,
    level: 'Beginner',
    estimatedTime: '8 min read',
    category: 'Setup',
    gradient: 'from-orange-500 to-red-400'
  },
  {
    title: 'Local Integration',
    description: 'Connect Arten to your local development workflow.',
    href: '/guides/local-integration',
    icon: <GitBranch className="h-6 w-6" />,
    level: 'Advanced',
    estimatedTime: '25 min read',
    category: 'Integration',
    gradient: 'from-indigo-500 to-purple-400'
  },
]

const categories = [
  { name: 'All Guides', count: 5, icon: BookOpen },
  { name: 'Fundamentals', count: 1, icon: Code2 },
  { name: 'AI Features', count: 1, icon: Brain },
  { name: 'Testing', count: 1, icon: TestTube },
  { name: 'Setup', count: 1, icon: Settings },
  { name: 'Integration', count: 1, icon: Rocket }
]

export default function GuidesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800'
      case 'Advanced': return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative mx-auto px-4 py-16 max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-300 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Learning Resources
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Guides & Tutorials
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master Arten's powerful features with our step-by-step guides. From basic test writing to advanced AI-powered automation, 
            we've got everything you need to become a testing expert.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">Open Source</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">MIT License</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">15min</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Read Time</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center px-4 py-2 rounded-full transition-all duration-200 ${
                index === 0 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Guides Grid */}
        <motion.div 
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {guides.map((guide, index) => (
            <motion.div
              key={guide.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Link href={guide.href} className="block">
                <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Popular badge */}
                  {guide.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        initial={{ rotate: -12 }}
                        whileHover={{ rotate: 0 }}
                        className="flex items-center px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg"
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </motion.div>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${guide.gradient} text-white shadow-lg`}
                      >
                        {guide.icon}
                      </motion.div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {guide.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {guide.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                      {guide.description}
                    </p>
                    
                    {/* Meta info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge className={`text-xs border ${getLevelColor(guide.level)}`}>
                          {guide.level}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {guide.estimatedTime}
                      </div>
                    </div>

                    {/* Read more arrow */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Start Reading
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-blue-600 dark:text-blue-400"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-12 text-center overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <BookOpen className="w-12 h-12 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                New to Arten?
              </h2>
              
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Start with our comprehensive getting started guide. Learn the fundamentals, 
                set up your first project, and create your first AI-powered test in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/getting-started">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link href="/examples">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  >
                    View Examples
                    <Code2 className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 