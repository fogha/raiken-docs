import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Terminal, Download, CheckCircle, Copy, AlertCircle, Zap, Settings, Play } from 'lucide-react'

export default function CLISetupGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-6 w-6 text-blue-500" />
          <Badge variant="outline" className="text-sm">Getting Started</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Getting Started with Arten CLI</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Install and set up the Arten CLI for AI-powered test generation.
        </p>
      </div>

      <div className="space-y-8">
        {/* Prerequisites */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Prerequisites
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Node.js 18+ installed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>npm or yarn package manager</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>A web application project</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>OpenRouter API key (for AI features)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Installation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-blue-500" />
              Installation
            </CardTitle>
            <CardDescription>
              Install the Arten CLI globally to access it from any project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Install globally via npm:</h4>
              <div className="bg-slate-900 rounded-lg p-4 relative group">
                <code className="text-green-400 text-sm">npm install -g @arten/cli</code>
                <button className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Or install locally in your project:</h4>
              <div className="bg-slate-900 rounded-lg p-4 relative group">
                <code className="text-green-400 text-sm">npm install --save-dev @arten/cli</code>
                <button className="absolute right-3 top-3 opacity-0 group-hover-opacity-100 transition-opacity">
                  <Copy className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Verify installation:</h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">arten --version</code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-green-500" />
              Basic Usage
            </CardTitle>
            <CardDescription>
              Get started with Arten in your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                Navigate to your project
              </h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">cd my-nextjs-app</code>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                Start Arten
              </h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">arten start</code>
              </div>
              <p className="text-sm text-muted-foreground">
                This will start the Arten bridge server and open the web interface at <code>http://localhost:3001</code>
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                Generate your first test
              </h4>
              <p className="text-sm text-muted-foreground">
                Open the web interface and use natural language to describe what you want to test. For example:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm italic">"Test that the login form accepts valid credentials and redirects to the dashboard"</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Commands */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-purple-500" />
              Essential Commands
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Start Arten</h4>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">arten start</code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Get Help</h4>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">arten --help</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-orange-500" />
              Configuration
            </CardTitle>
            <CardDescription>
              Set up your OpenRouter API key and project settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
                          <div className="space-y-4">
              <h4 className="font-semibold">Quick Setup</h4>
              <p className="text-sm text-muted-foreground">
                Add your API key to <code>.env.local</code>:
              </p>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  OPENROUTER_API_KEY=your_api_key_here
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">API Key Setup</h4>
              <p className="text-sm text-muted-foreground">
                Get your OpenRouter API key from <a href="https://openrouter.ai" className="text-blue-500 hover:underline">openrouter.ai</a> and add it to your <code>.env.local</code> file.
                <br />See the <a href="/guides/configuration" className="text-blue-500 hover:underline">Configuration guide</a> for detailed setup.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Auto-Detection</h4>
              <p className="text-sm text-muted-foreground">
                Arten automatically detects your project type and configures appropriate settings for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Next.js applications</li>
                <li>React applications</li>
                <li>Vue.js applications</li>
                <li>Node.js servers</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Now that you have Arten CLI set up, explore these guides to make the most of it:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/ai-test-generation">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">AI Test Generation</h4>
                    <p className="text-sm text-muted-foreground">Learn how to use AI to generate comprehensive tests</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/configuration">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Project Configuration</h4>
                    <p className="text-sm text-muted-foreground">Configure Arten for your specific project type</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 