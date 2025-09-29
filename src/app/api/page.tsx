'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Code, 
  Terminal, 
  Settings, 
  Zap, 
  Globe,
  FileText, 
  Copy,
  CheckCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function APIReferencePage() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text)
    setCopiedEndpoint(endpoint)
    setTimeout(() => setCopiedEndpoint(null), 2000)
  }

  const browserEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/browser',
      action: 'initialize',
      description: 'Initialize a new browser instance',
      payload: {
        action: 'initialize',
        browserType: 'chromium',
        headless: true
      }
    },
    {
      method: 'POST',
      endpoint: '/api/browser',
      action: 'navigate',
      description: 'Navigate to a specific URL',
      payload: {
        action: 'navigate',
        url: 'https://example.com'
      }
    },
    {
      method: 'POST',
      endpoint: '/api/browser',
      action: 'extractDOM',
      description: 'Extract DOM tree from current page',
      payload: {
        action: 'extractDOM'
      }
    },
    {
      method: 'POST',
      endpoint: '/api/browser',
      action: 'takeScreenshot',
      description: 'Capture screenshot of current page',
      payload: {
        action: 'takeScreenshot',
        screenshotOptions: {
          fullPage: true
        }
      }
    }
  ]

  const testEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/test/generate',
      description: 'Generate test using AI',
      payload: {
        description: 'Test file upload with validation',
        url: 'https://example.com/upload',
        model: 'anthropic/claude-3.5-sonnet'
      }
    }
  ]

  const cliCommands = [
    {
      command: 'raiken start',
      description: 'Start the Raiken web interface and bridge server',
      options: [
        { flag: '-p, --port <port>', description: 'Port to run the server on (default: 3456)' },
        { flag: '--no-open', description: 'Don\'t open browser automatically' }
      ],
      example: 'raiken start --port 4000 --no-open'
    },
    {
      command: 'raiken init',
      description: 'Initialize Raiken in the current project',
      options: [
        { flag: '--force', description: 'Overwrite existing configuration' }
      ],
      example: 'raiken init --force'
    },
    {
      command: 'raiken info',
      description: 'Display information about the current project',
      options: [],
      example: 'raiken info'
    },
    {
      command: 'raiken remote',
      description: 'Start bridge server for remote access',
      options: [
        { flag: '--port <port>', description: 'Port for bridge server (default: 3001)' }
      ],
      example: 'raiken remote --port 3001'
    }
  ]

  const configOptions = [
    {
      name: 'OPENROUTER_API_KEY',
      type: 'string',
      required: true,
      description: 'API key for OpenRouter AI service'
    },
    {
      name: 'OPENROUTER_MODEL',
      type: 'string',
      required: false,
      default: 'anthropic/claude-3.5-sonnet',
      description: 'AI model to use for test generation'
    },
    {
      name: 'OPENROUTER_REFERRER',
      type: 'string',
      required: false,
      description: 'Referrer URL for OpenRouter API calls'
    },
    {
      name: 'OPENROUTER_TITLE',
      type: 'string',
      required: false,
      description: 'Title for OpenRouter API calls'
    },
    {
      name: 'RAIKEN_AUTO_OPEN',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Automatically open browser on start'
    },
    {
      name: 'RAIKEN_TEST_DIR',
      type: 'string',
      required: false,
      default: 'tests',
      description: 'Directory to save generated tests'
    }
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
            API Reference
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete reference for Raiken's REST API endpoints, CLI commands, and configuration options.
            Build custom integrations and automate your testing workflow.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4 mb-16"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold">Browser API</h3>
              <p className="text-sm text-muted-foreground">DOM extraction & navigation</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold">Test API</h3>
              <p className="text-sm text-muted-foreground">Generation & execution</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Terminal className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold">CLI Commands</h3>
              <p className="text-sm text-muted-foreground">Command line interface</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Settings className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold">Configuration</h3>
              <p className="text-sm text-muted-foreground">Environment variables</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* API Sections */}
        <Tabs defaultValue="browser" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browser">Browser API</TabsTrigger>
            <TabsTrigger value="test">Test API</TabsTrigger>
            <TabsTrigger value="cli">CLI</TabsTrigger>
            <TabsTrigger value="config">Config</TabsTrigger>
          </TabsList>

          {/* Browser API */}
          <TabsContent value="browser" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Browser Automation API</h2>
              <p className="text-muted-foreground mb-8">
                Control browser instances, navigate pages, extract DOM, and capture screenshots.
              </p>

              <div className="space-y-6">
                {browserEndpoints.map((endpoint, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm">{endpoint.endpoint}</code>
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(JSON.stringify(endpoint.payload, null, 2), endpoint.action)}
                        >
                          {copiedEndpoint === endpoint.action ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <CardDescription>{endpoint.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Request Body</h4>
                          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-green-400">
                              {JSON.stringify(endpoint.payload, null, 2)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Test API */}
          <TabsContent value="test" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Test Generation API</h2>
              <p className="text-muted-foreground mb-8">
                Generate tests using AI with custom configurations and models.
              </p>

              <div className="space-y-6">
                {testEndpoints.map((endpoint, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm">{endpoint.endpoint}</code>
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(JSON.stringify(endpoint.payload, null, 2), endpoint.endpoint)}
                        >
                          {copiedEndpoint === endpoint.endpoint ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <CardDescription>{endpoint.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Request Body</h4>
                          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-green-400">
                              {JSON.stringify(endpoint.payload, null, 2)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* CLI Commands */}
          <TabsContent value="cli" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">CLI Commands</h2>
              <p className="text-muted-foreground mb-8">
                Command line interface for local development and project management.
              </p>

              <div className="space-y-6">
                {cliCommands.map((cmd, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Terminal className="h-5 w-5 text-purple-500" />
                        <code className="text-lg">{cmd.command}</code>
                      </CardTitle>
                      <CardDescription>{cmd.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {cmd.options.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Options</h4>
                          <div className="space-y-2">
                            {cmd.options.map((option, optIndex) => (
                              <div key={optIndex} className="flex gap-4 p-2 rounded border">
                                <code className="text-sm font-mono text-blue-600 flex-shrink-0">
                                  {option.flag}
                                </code>
                                <span className="text-sm text-muted-foreground">
                                  {option.description}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold mb-2">Example</h4>
                        <div className="bg-slate-900 rounded-lg p-3">
                          <code className="text-green-400">{cmd.example}</code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Configuration */}
          <TabsContent value="config" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Configuration</h2>
              <p className="text-muted-foreground mb-8">
                Environment variables and configuration options for customizing Raiken behavior.
              </p>

              <div className="space-y-4">
                {configOptions.map((config, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <code className="text-lg font-semibold">{config.name}</code>
                          <Badge variant={config.required ? 'destructive' : 'secondary'}>
                            {config.required ? 'Required' : 'Optional'}
                          </Badge>
                          <Badge variant="outline">{config.type}</Badge>
                        </div>
                        {config.default && (
                          <Badge variant="outline" className="font-mono">
                            default: {config.default}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{config.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Configuration File</CardTitle>
                  <CardDescription>
                    You can also configure Raiken using a <code>raiken.config.js</code> file in your project root.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-sm text-green-400">
                      {`// raiken.config.js
module.exports = {
  port: 3456,
  autoOpen: true,
  testDir: 'e2e',
  browser: {
    type: 'chromium',
    headless: false
  },
  ai: {
    model: 'anthropic/claude-3.5-sonnet',
    temperature: 0.7
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* SDK Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Bridge API</h2>

          <Card>
            <CardHeader>
              <CardTitle>Local HTTP API</CardTitle>
              <CardDescription>
                Access Raiken's functionality programmatically via HTTP API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">API Endpoint</h4>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400">http://localhost:3001/api</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Example Usage</h4>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-sm text-green-400">
                    {`// Generate a test via HTTP API
const response = await fetch('http://localhost:3001/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    description: 'Test form submission with validation',
    url: 'https://app.example.com/contact'
  })
});

const test = await response.json();

// Save test to project
await fetch('http://localhost:3001/api/save', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: test.code,
    filename: 'contact-form.spec.ts'
  })
});`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out our comprehensive guides or join our community for support and discussions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="/guides" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Guides
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/examples" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    See Examples
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
} 