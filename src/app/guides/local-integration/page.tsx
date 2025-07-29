import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch, Server, FileCode, Zap, CheckCircle, AlertTriangle, Monitor, Workflow, RefreshCw, Play } from 'lucide-react'

export default function LocalIntegrationGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="h-6 w-6 text-indigo-500" />
          <Badge variant="outline" className="text-sm">Integration</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Local Integration</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Integrate Arten with your local development workflow using the bridge server for seamless file system access and test management.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-blue-500" />
              Bridge Server Architecture
            </CardTitle>
            <CardDescription>
              How Arten connects your web interface with your local file system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Arten uses a local bridge server to connect the web interface with your project files. 
              This allows you to generate tests in the browser and save them directly to your project.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border">
              <div className="grid gap-6 md:grid-cols-3 text-center">
                <div className="space-y-2">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Web Interface</h4>
                  <p className="text-sm text-muted-foreground">localhost:3001</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Bridge Server</h4>
                  <p className="text-sm text-muted-foreground">File system access</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <FileCode className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Your Project</h4>
                  <p className="text-sm text-muted-foreground">Local files</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prerequisites */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-green-500" />
              Prerequisites
            </CardTitle>
            <CardDescription>
              Before setting up local integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm">
                <strong>Before you start:</strong> Complete the <a href="/guides/cli-setup" className="text-blue-600 hover:underline">CLI Setup guide</a> to install and configure Arten.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              This guide assumes you have Arten CLI installed and your OpenRouter API key configured.
            </p>
          </CardContent>
        </Card>

        {/* Workflow Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-purple-500" />
              Development Workflow
            </CardTitle>
            <CardDescription>
              How to integrate Arten into your daily development process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Typical Workflow</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>Start your application development server</li>
                  <li>Run <code>arten start</code> in your project directory</li>
                  <li>Develop features in your preferred editor</li>
                  <li>Generate tests using Arten's web interface</li>
                  <li>Tests are automatically saved to your project</li>
                  <li>Run tests using <code>arten test</code> or your preferred test runner</li>
                </ol>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold">File System Access</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Read project structure
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Save generated tests
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Update existing tests
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Read configuration files
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Real-time Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Live test execution
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      File change detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Project auto-discovery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Test result streaming
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-5 w-5 text-orange-500" />
              File Management
            </CardTitle>
            <CardDescription>
              How Arten manages test files in your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Default File Structure</h4>
              <p className="text-sm text-muted-foreground">
                Arten creates and organizes test files based on your project structure:
              </p>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  <span className="text-gray-400">your-project/</span><br />
                  ├── <span className="text-blue-400">tests/</span><br />
                  │   ├── <span className="text-yellow-400">auth/</span><br />
                  │   │   ├── login.spec.ts<br />
                  │   │   └── registration.spec.ts<br />
                  │   ├── <span className="text-yellow-400">components/</span><br />
                  │   │   ├── header.spec.ts<br />
                  │   │   └── footer.spec.ts<br />
                  │   └── <span className="text-yellow-400">e2e/</span><br />
                  │       └── user-journey.spec.ts<br />
                  ├── <span className="text-blue-400">generated-tests/</span><br />
                  │   └── <span className="text-gray-400"># AI-generated tests</span><br />
                  └── <span className="text-blue-400">arten.config.js</span>
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">File Operations</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-green-600">✅ Supported Operations</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Create new test files</li>
                    <li>• Update existing tests</li>
                    <li>• Organize tests by feature</li>
                    <li>• Auto-generate file names</li>
                    <li>• Backup existing files</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-blue-600">🔒 Safety Features</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Never overwrites without confirmation</li>
                    <li>• Creates backups before changes</li>
                    <li>• Validates file permissions</li>
                    <li>• Respects .gitignore patterns</li>
                    <li>• Atomic file operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security & Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Security & Permissions
            </CardTitle>
            <CardDescription>
              Understanding security implications and file access permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Local Access Only</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                The bridge server only accepts connections from localhost (127.0.0.1) and cannot be accessed from external networks.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold">Security Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Localhost-only binding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Project directory sandboxing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    File operation validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No external network access
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Required Permissions</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Read project files
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Write to test directories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Execute test commands
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Create configuration files
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-indigo-500" />
              Advanced Integration Features
            </CardTitle>
            <CardDescription>
              Powerful features for enhanced development workflow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold">Hot Reload Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Arten can detect when your application restarts and automatically reconnect.
                </p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">
                    <span className="text-gray-400"># Auto-reconnect on app restart</span><br />
                    arten start --watch
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">CI/CD Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Run generated tests in your CI/CD pipeline using standard test runners.
                </p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">
                    <span className="text-gray-400"># Run tests in CI</span><br />
                    npx playwright test
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Multi-Project Support</h4>
                <p className="text-sm text-muted-foreground">
                  Switch between different projects without restarting the bridge server.
                </p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">
                    arten switch /path/to/other/project
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Test Execution</h4>
                <p className="text-sm text-muted-foreground">
                  Execute tests directly from the web interface with real-time results.
                </p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">
                    arten test --headed --debug
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-red-500" />
              Troubleshooting
            </CardTitle>
            <CardDescription>
              Common issues and solutions for local integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4">
                <h4 className="font-semibold text-red-800 dark:text-red-200">Bridge Server Won't Start</h4>
                <ul className="text-sm text-red-700 dark:text-red-300 mt-2 space-y-1">
                  <li>• Check if port 3001 is already in use</li>
                  <li>• Ensure you have write permissions in the project directory</li>
                  <li>• Try running with admin/sudo privileges if needed</li>
                  <li>• Check for firewall or antivirus blocking the connection</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">File Permissions Issues</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-2 space-y-1">
                  <li>• Ensure the test directory is writable</li>
                  <li>• Check if files are locked by other processes</li>
                  <li>• Verify you have permission to create new files</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Application Not Detected</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                  <li>• Ensure your app is running on the expected port</li>
                  <li>• Check if the app URL is accessible from localhost</li>
                  <li>• Manually specify the app port: <code>arten start --app-port 3000</code></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ready to start using Arten with your local development workflow?
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/cli-setup">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">CLI Setup</h4>
                    <p className="text-sm text-muted-foreground">Get the CLI installed and configured</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/ai-test-generation">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">AI Test Generation</h4>
                    <p className="text-sm text-muted-foreground">Start generating tests with AI</p>
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