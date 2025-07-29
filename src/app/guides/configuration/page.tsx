import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, FolderOpen, Code, FileText, Zap, CheckCircle, AlertCircle, Copy, Globe } from 'lucide-react'

export default function ConfigurationGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="h-6 w-6 text-orange-500" />
          <Badge variant="outline" className="text-sm">Setup</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Project Configuration</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Configure Arten for your Next.js, React, Vue, or other projects with auto-detection and custom settings.
        </p>
      </div>

      <div className="space-y-8">
        {/* Auto-Detection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              Automatic Project Detection
            </CardTitle>
            <CardDescription>
              Arten automatically detects your project type and configures appropriate settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              When you run <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">arten start</code>, 
              Arten scans your project to automatically detect the framework and configure optimal settings.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Supported Frameworks
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Next.js (App Router & Pages Router)</li>
                  <li>• React (Create React App & Vite)</li>
                  <li>• Vue.js (Vue CLI & Vite)</li>
                  <li>• Nuxt.js</li>
                  <li>• SvelteKit</li>
                  <li>• Express.js</li>
                  <li>• Static HTML sites</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Settings className="h-4 w-4 text-orange-500" />
                  Auto-Configured Settings
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Default application port</li>
                  <li>• Test file locations</li>
                  <li>• Build output directories</li>
                  <li>• TypeScript configuration</li>
                  <li>• Package manager detection</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-500" />
              Environment Configuration
            </CardTitle>
            <CardDescription>
              Set up environment variables and API keys
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Required Environment Variables</h4>
              <p className="text-sm text-muted-foreground">
                Create a <code>.env.local</code> file in your project root:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 relative group">
                <code className="text-green-400 text-sm block">
                  <span className="text-gray-400"># Required for AI test generation</span><br />
                  OPENROUTER_API_KEY=your_api_key_here<br />
                  <br />
                  <span className="text-gray-400"># Optional customization</span><br />
                  ARTEN_PORT=3001<br />
                  APP_PORT=3000<br />
                  ARTEN_MODEL=anthropic/claude-3-sonnet<br />
                  TEST_OUTPUT_DIR=./tests
                </code>
                <button className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Getting OpenRouter API Key</h4>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Visit <a href="https://openrouter.ai" className="text-blue-600 hover:underline">openrouter.ai</a></li>
                  <li>Sign up or log in to your account</li>
                  <li>Navigate to the API Keys section</li>
                  <li>Generate a new API key</li>
                  <li>Copy the key and add it to your <code>.env.local</code> file</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Framework Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-purple-500" />
              Framework Support
            </CardTitle>
            <CardDescription>
              Arten automatically detects and configures for your project type
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Arten supports these frameworks out of the box with automatic configuration:
            </p>
            <div className="grid gap-2 md:grid-cols-3">
              <div className="text-sm">• Next.js</div>
              <div className="text-sm">• React (CRA, Vite)</div>
              <div className="text-sm">• Vue.js</div>
              <div className="text-sm">• Nuxt.js</div>
              <div className="text-sm">• SvelteKit</div>
              <div className="text-sm">• Express.js</div>
            </div>
            <p className="text-sm text-muted-foreground">
              If your framework isn't detected, you can manually set configuration in <code>arten.config.js</code>.
            </p>
          </CardContent>
        </Card>

        {/* Advanced Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-500" />
              Advanced Configuration
            </CardTitle>
            <CardDescription>
              Custom configuration options and overrides
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Configuration File</h4>
              <p className="text-sm text-muted-foreground">
                Create an <code>arten.config.js</code> file for advanced customization:
              </p>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  <span className="text-blue-400">module</span>.exports = {`{`}<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">appPort</span>: <span className="text-cyan-400">3000</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">artenPort</span>: <span className="text-cyan-400">3001</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">testDir</span>: <span className="text-yellow-400">'./tests'</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">baseUrl</span>: <span className="text-yellow-400">'http://localhost:3000'</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">model</span>: <span className="text-yellow-400">'anthropic/claude-3-sonnet'</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">timeout</span>: <span className="text-cyan-400">30000</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">browser</span>: {`{`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">headless</span>: <span className="text-blue-400">false</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">slowMo</span>: <span className="text-cyan-400">100</span><br />
                  &nbsp;&nbsp;{`}`}<br />
                  {`}`}
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">CLI Configuration Commands</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Initialize configuration:</p>
                  <div className="bg-slate-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm">arten config --init</code>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Set specific values:</p>
                  <div className="bg-slate-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm">arten config --set appPort=3000</code>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">View current configuration:</p>
                  <div className="bg-slate-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm">arten config --show</code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Troubleshooting
            </CardTitle>
            <CardDescription>
              Common configuration issues and solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Port Conflicts</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  If ports 3000 or 3001 are already in use, specify custom ports:
                </p>
                <div className="bg-slate-900 rounded p-2 mt-2">
                  <code className="text-green-400 text-xs">arten start --port 3002 --app-port 3001</code>
                </div>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4">
                <h4 className="font-semibold text-red-800 dark:text-red-200">API Key Issues</h4>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  If AI features aren't working, check your OpenRouter API key:
                </p>
                <ul className="text-xs text-red-600 dark:text-red-400 mt-2 space-y-1">
                  <li>• Ensure the key is correctly set in .env.local</li>
                  <li>• Verify the key has sufficient credits</li>
                  <li>• Check for typos or extra spaces</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Project Not Detected</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  If Arten doesn't detect your project type, you can manually configure it:
                </p>
                <div className="bg-slate-900 rounded p-2 mt-2">
                  <code className="text-green-400 text-xs">arten config --set framework=nextjs</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Now that you have Arten configured, explore these guides:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/ai-test-generation">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">AI Test Generation</h4>
                    <p className="text-sm text-muted-foreground">Learn how to generate tests using natural language</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/local-integration">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Local Integration</h4>
                    <p className="text-sm text-muted-foreground">Integrate with your local development workflow</p>
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