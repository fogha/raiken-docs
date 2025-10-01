'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, Zap, Code2, Shield, Sparkles, Terminal, Cpu, Globe, ChevronRight, Play, GitBranch } from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl animate-spin-slow" />
        </div>

        {/* Floating Grid Animation */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-blue-500/30 to-purple-500/30 opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-full bg-card/80 backdrop-blur-sm px-6 py-3 border border-border/50">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">AI-Powered Test Automation</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Main Title with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent leading-tight"
            >
              AI-Powered Test Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-center text-muted-foreground/90 max-w-3xl mx-auto mb-4"
            >
              Transform JSON test specifications into comprehensive test suites with
              <span className="text-primary font-medium"> AI-powered generation</span> and
              <span className="text-blue-500 font-medium"> local development integration</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-10 text-lg text-muted-foreground/80 max-w-2xl mx-auto"
            >
              Features a visual interface for creating, managing, and executing tests with
              real-time status tracking, enhanced error handling, and comprehensive test management.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 sm:justify-center mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/getting-started">
                  <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary border-0 px-8 py-6 text-lg">
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="http://84.46.245.248:3000/tests/editor" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group border-border/50 hover:border-green-500/50 px-8 py-6 text-lg">
                    <Play className="mr-2 h-5 w-5 group-hover:text-green-500 transition-colors" />
                    Try Live Demo
                    <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/guides">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group border-border/50 hover:border-primary/50 px-8 py-6 text-lg">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                    Documentation
                    <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats/Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
            >
              <StatsCard icon={Terminal} value="10,000+" label="Tests Generated" />
              <StatsCard icon={Zap} value="99.9%" label="Uptime" />
              <StatsCard icon={Globe} value="50+" label="Countries" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 relative" ref={targetRef}>
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-b from-muted/5 to-background"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Powerful Features
              </span>
            </motion.div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-foreground">
              Why Choose <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Raiken</span>?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Powerful features designed to make test automation accessible, efficient, and reliable
              for modern development teams.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <EnhancedFeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="AI Test Generation"
              description="Generate comprehensive test suites using AI-powered analysis. Create tests from natural language descriptions or JSON specifications."
              gradient="from-yellow-500/20 to-orange-500/20"
              delay={0}
            />
            <EnhancedFeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Advanced Test Editor"
              description="Monaco-powered TypeScript editor with syntax highlighting, auto-completion, and real-time error detection for professional test development."
              gradient="from-blue-500/20 to-cyan-500/20"
              delay={0.1}
            />
            <EnhancedFeatureCard
              icon={<Code2 className="h-8 w-8" />}
              title="Test Management"
              description="Comprehensive test suite management with organized test files, execution history, and detailed reporting capabilities."
              gradient="from-purple-500/20 to-pink-500/20"
              delay={0.2}
            />
            <EnhancedFeatureCard
              icon={<GitBranch className="h-8 w-8" />}
              title="Visual Test Builder"
              description="Intuitive drag-and-drop interface for creating tests visually, with real-time preview and element selection capabilities."
              gradient="from-green-500/20 to-emerald-500/20"
              delay={0.3}
            />
            <EnhancedFeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Test Reports"
              description="Detailed test execution reports with screenshots, performance metrics, and comprehensive failure analysis for debugging."
              gradient="from-indigo-500/20 to-blue-500/20"
              delay={0.4}
            />
            <EnhancedFeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Theme Support"
              description="Built-in dark and light theme support with seamless switching, providing a comfortable development experience."
              gradient="from-red-500/20 to-rose-500/20"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Quick Start Section */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                <Play className="w-4 h-4 mr-2" />
                Quick Start
              </span>
            </motion.div>

            <h2 className="mb-8 text-4xl md:text-5xl font-bold text-foreground">
              Get Started in <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Minutes</span>
            </h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardContent className="pt-8">
                <div className="space-y-8 text-left">
                  <QuickStartStep
                    number={1}
                    title="Access Raiken Platform"
                    code="Visit http://84.46.245.248:3000"
                    delay={0}
                  />
                  <QuickStartStep
                    number={2}
                    title="Create Your First Test"
                    code="Click 'Create First Test' in the editor"
                    delay={0.2}
                  />
                  <QuickStartStep
                    number={3}
                    title="Generate and Run Tests"
                    code="Use AI generation or visual builder"
                    delay={0.4}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <Link href="/getting-started/installation">
                    <Button className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-0">
                      View Complete Installation Guide
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatsCard({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <div className="flex flex-col items-center space-y-2">
        <Icon className="h-6 w-6 text-primary group-hover:text-blue-500 transition-colors" />
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  )
}

function EnhancedFeatureCard({
  icon,
  title,
  description,
  gradient,
  delay
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  delay: number
}) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <motion.div
            className={`mb-4 text-primary p-3 rounded-xl bg-gradient-to-br ${gradient} w-fit`}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

function QuickStartStep({
  number,
  title,
  code,
  delay
}: {
  number: number
  title: string
  code: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-500 text-primary-foreground text-sm font-semibold"
      >
        {number}
      </motion.div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-lg bg-muted/50 p-3 font-mono text-sm border border-border/50 group-hover:border-primary/50 transition-colors"
        >
          <code className="text-foreground">{code}</code>
        </motion.div>
      </div>
    </motion.div>
  )
}
