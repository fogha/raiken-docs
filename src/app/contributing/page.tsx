'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  GitBranch, Code, Users, Zap, Terminal, CheckCircle, 
  ArrowRight, Github, Book, MessageSquare, Heart
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContributingPage() {
  const setupSteps = [
    {
      title: 'Fork the repository',
      description: 'Create your own fork of the Arten repository on GitHub',
      command: 'git clone https://github.com/your-username/arten.git'
    },
    {
      title: 'Install dependencies',
      description: 'Install all project dependencies using npm',
      command: 'npm install'
    },
    {
      title: 'Set up environment',
      description: 'Create environment variables for development',
      command: 'cp .env.example .env.local'
    },
    {
      title: 'Start development',
      description: 'Run the development server',
      command: 'npm run dev'
    }
  ]

  const contributionTypes = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Code Contributions',
      description: 'Bug fixes, new features, and improvements to the codebase',
      examples: ['Bug fixes', 'New AI models', 'Performance improvements', 'UI enhancements']
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: 'Documentation',
      description: 'Improve guides, API docs, and help others learn Arten',
      examples: ['Tutorial improvements', 'API documentation', 'Code examples', 'Translation']
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Community Support',
      description: 'Help other users and share your knowledge',
      examples: ['Answer questions', 'Share examples', 'Write blog posts', 'Create videos']
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Testing & QA',
      description: 'Test new features and report bugs',
      examples: ['Beta testing', 'Bug reports', 'Performance testing', 'Browser compatibility']
    }
  ]

  const devRequirements = [
    { name: 'Node.js 18+', description: 'JavaScript runtime' },
    { name: 'Git', description: 'Version control' },
    { name: 'GitHub account', description: 'For pull requests' },
    { name: 'Code editor', description: 'VS Code recommended' }
  ]

  const projectStructure = [
    { path: 'src/app/', description: 'Next.js application routes and pages' },
    { path: 'src/components/', description: 'Reusable React components' },
    { path: 'src/core/', description: 'Core functionality (browser, testing, DOM)' },
    { path: 'src/store/', description: 'State management (Zustand stores)' },
    { path: 'cli/', description: 'CLI tool and bridge server' },
    { path: 'docs/', description: 'Documentation and guides' }
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
            Contributing to Arten
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build the future of AI-powered testing. Whether you're fixing bugs, 
            adding features, or improving documentation, every contribution matters.
          </p>
        </motion.div>

        {/* Welcome Message */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Welcome Contributors!</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Arten is an open-source project built by the community, for the community. 
                We welcome contributions from developers of all skill levels and backgrounds.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contribution Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Ways to Contribute</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contributionTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {type.icon}
                    </div>
                    {type.title}
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Development Setup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Development Setup</h2>
          
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="setup">Quick Setup</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="structure">Project Structure</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get Started in 4 Steps</CardTitle>
                  <CardDescription>
                    Follow these steps to set up your development environment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {setupSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                          <div className="bg-slate-900 rounded-lg p-3">
                            <code className="text-green-400 text-sm">{step.command}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Development Requirements</CardTitle>
                  <CardDescription>
                    Tools and software needed for development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {devRequirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{req.name}</h4>
                          <p className="text-sm text-muted-foreground">{req.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Structure</CardTitle>
                  <CardDescription>
                    Understanding the codebase organization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectStructure.map((item, index) => (
                      <div key={index} className="flex gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                        <code className="text-sm font-mono text-blue-600 flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                          {item.path}
                        </code>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Development Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Development Workflow</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-purple-500" />
                  Git Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Create a branch</h4>
                      <code className="text-xs bg-muted px-2 py-1 rounded">git checkout -b feature/your-feature</code>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Make changes</h4>
                      <p className="text-sm text-muted-foreground">Write code, tests, and documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Commit & push</h4>
                      <code className="text-xs bg-muted px-2 py-1 rounded">git commit -m "feat: add new feature"</code>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Create PR</h4>
                      <p className="text-sm text-muted-foreground">Open a pull request on GitHub</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-500" />
                  Development Commands
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Start development server</h4>
                    <div className="bg-slate-900 rounded-lg p-2">
                      <code className="text-green-400 text-sm">npm run dev</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Run tests</h4>
                    <div className="bg-slate-900 rounded-lg p-2">
                      <code className="text-green-400 text-sm">npm test</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Build for production</h4>
                    <div className="bg-slate-900 rounded-lg p-2">
                      <code className="text-green-400 text-sm">npm run build</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Lint code</h4>
                    <div className="bg-slate-900 rounded-lg p-2">
                      <code className="text-green-400 text-sm">npm run lint</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Code Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Code Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>Type safety and best practices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use strict TypeScript types</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Prefer interfaces over types for objects</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use proper JSDoc comments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Avoid <code>any</code> types</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>React Components</CardTitle>
                <CardDescription>Component structure and patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use functional components</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Implement proper error boundaries</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use custom hooks for logic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Follow accessibility guidelines</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testing</CardTitle>
                <CardDescription>Test coverage and quality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Write unit tests for utilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Add integration tests for features</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Test error handling scenarios</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Maintain test coverage above 80%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Style</CardTitle>
                <CardDescription>Formatting and conventions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use Prettier for formatting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Follow ESLint rules</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use descriptive variable names</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Keep functions small and focused</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Pull Request Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Pull Request Guidelines
              </CardTitle>
              <CardDescription>
                How to create effective pull requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">PR Checklist</h4>
                  <div className="space-y-2">
                    {[
                      'Clear title and description',
                      'Link to related issues',
                      'Tests added/updated',
                      'Documentation updated',
                      'No merge conflicts',
                      'CI checks passing'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Commit Convention</h4>
                  <div className="space-y-2 text-sm">
                    <div><code>feat:</code> New features</div>
                    <div><code>fix:</code> Bug fixes</div>
                    <div><code>docs:</code> Documentation changes</div>
                    <div><code>test:</code> Test additions/updates</div>
                    <div><code>refactor:</code> Code refactoring</div>
                    <div><code>chore:</code> Maintenance tasks</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Community & Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Join the Community</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Github className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-lg font-semibold mb-3">GitHub Discussions</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Ask questions, share ideas, and collaborate with other contributors.
                </p>
                <Button asChild className="w-full">
                  <a href="https://github.com/your-username/arten/discussions" target="_blank" rel="noopener noreferrer">
                    Join Discussions <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-lg font-semibold mb-3">Discord Server</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Real-time chat with the community and maintainers.
                </p>
                <Button asChild className="w-full">
                  <a href="https://discord.gg/arten" target="_blank" rel="noopener noreferrer">
                    Join Discord <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Weekly community calls with maintainers and contributors.
                </p>
                <Button asChild className="w-full">
                  <a href="/community/office-hours" target="_blank" rel="noopener noreferrer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
            <h3 className="text-xl font-bold mb-3">Ready to Contribute?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start by checking out our good first issues or jump into discussions. 
              Every contribution, no matter how small, makes a difference!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/your-username/arten/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Good First Issues
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/api">
                  <Book className="mr-2 h-4 w-4" />
                  Read API Docs
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 