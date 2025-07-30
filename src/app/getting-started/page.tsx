'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Terminal, Zap, Sparkles, Code2, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GettingStartedPage() {
  const prerequisites = [
    { name: 'Node.js 18+', description: 'Modern JavaScript runtime' },
    { name: 'npm/yarn/pnpm', description: 'Package manager' },
    { name: 'Modern browser', description: 'Chrome, Firefox, or Safari' },
    { name: 'OpenRouter API key', description: 'For AI-powered test generation' }
  ]

  const quickStartSteps = [
    {
      title: 'Install the CLI',
      command: 'npm install -g @arten/cli',
      description: 'Install Arten CLI globally to access it from any project'
    },
    {
      title: 'Navigate to your project',
      command: 'cd my-project',
      description: 'Move to your project directory'
    },
    {
      title: 'Start Arten',
      command: 'arten start',
      description: 'Launches the web interface and bridge server'
    }
  ]

  const supportedFrameworks = [
    'Next.js', 'React', 'Vue.js', 'Svelte', 'Angular', 'Nuxt', 'Vite', 'Express.js'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Getting Started
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start building AI-powered tests in minutes. Follow our quick start guide to set up Arten 
            in your project and generate your first test.
          </p>
        </motion.div>

        {/* Prerequisites */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Prerequisites
              </CardTitle>
              <CardDescription>
                Make sure you have these requirements before getting started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prerequisites.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{req.name}</h4>
                      <p className="text-sm text-muted-foreground">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Installation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Installation</h2>
          
          <Tabs defaultValue="global" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="global">Global Installation</TabsTrigger>
              <TabsTrigger value="npx">Use with npx</TabsTrigger>
            </TabsList>
            
            <TabsContent value="global" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Install globally (Recommended)</h3>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-green-400">npm install -g @arten/cli</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This installs Arten globally, allowing you to use it from any project directory.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="npx" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Use without installation</h3>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-green-400">npx @arten/cli@latest start</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Run Arten directly without installing globally. Always uses the latest version.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
          
          <div className="space-y-6">
            {quickStartSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <div className="bg-slate-900 rounded-lg p-3 mb-3">
                        <code className="text-green-400">{step.command}</code>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-3">
              <Play className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900 dark:text-green-100">What happens next?</h3>
            </div>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Arten auto-detects your project type (Next.js, React, Vue, etc.)</li>
              <li>• Opens your browser to http://localhost:3456</li>
              <li>• Starts the bridge server for local file system access</li>
              <li>• Ready to generate and run tests!</li>
            </ul>
          </div>
        </motion.section>

        {/* Supported Frameworks */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Supported Frameworks</CardTitle>
              <CardDescription>
                Arten automatically detects and configures for these project types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {supportedFrameworks.map((framework) => (
                  <Badge key={framework} variant="secondary" className="px-3 py-1">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-dashed border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Test Generation</h3>
                <p className="text-sm text-muted-foreground">
                  Convert natural language descriptions into complete test suites using 30+ AI models
                </p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Terminal className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Local Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless CLI integration with project detection and automatic test saving
                </p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Code2 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Multi-Browser Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Test across Chromium, Firefox, and WebKit with comprehensive reporting
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Next Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Next Steps</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Configure Your Project</h3>
                <p className="text-muted-foreground mb-4">
                  Set up your OpenRouter API key and customize Arten for your specific project needs.
                </p>
                <Button asChild className="w-full">
                  <Link href="/getting-started/configuration">
                    Configure Arten <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Generate Your First Test</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to use AI to generate comprehensive tests from natural language descriptions.
                </p>
                <Button asChild className="w-full">
                  <Link href="/guides/ai-test-generation">
                    Start Testing <Zap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 