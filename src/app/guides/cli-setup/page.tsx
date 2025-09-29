import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Monitor, Globe, CheckCircle, Copy, AlertCircle, Zap, Settings, Play, Code2 } from 'lucide-react'

export default function TestEditorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="h-6 w-6 text-blue-500" />
          <Badge variant="outline" className="text-sm">Getting Started</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Using Raiken's Test Editor</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to use Raiken's advanced Monaco-based test editor for creating and managing tests.
        </p>
      </div>

      <div className="space-y-8">
        {/* Accessing Raiken */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Accessing Raiken Platform
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Raiken is a web-based platform that you can access directly through your browser.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Copy className="h-4 w-4" />
                <span className="font-mono text-sm">http://84.46.245.248:3000</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Navigate to this URL to access the Raiken test automation platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Test Editor Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-green-500" />
              Test Editor Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Monaco Editor</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional TypeScript editor with syntax highlighting, auto-completion, and error detection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Real-time Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Instant feedback on syntax errors and code issues as you type.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Code Formatting</h4>
                  <p className="text-sm text-muted-foreground">
                    Built-in code formatting to maintain consistent code style.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Theme Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark themes for comfortable coding.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-purple-500" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Access the Platform</h4>
                  <p className="text-sm text-muted-foreground">
                    Navigate to the Raiken platform URL in your web browser.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Navigate to Test Editor</h4>
                  <p className="text-sm text-muted-foreground">
                    Click on "Test Editor" in the navigation to access the code editor.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Create Your First Test</h4>
                  <p className="text-sm text-muted-foreground">
                    Click "Create First Test" to start writing your test code.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">Use AI Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Click "Generate Test" to use AI-powered test creation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Editor Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-orange-500" />
              Editor Interface
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The Raiken test editor provides a comprehensive interface for test development:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Left Panel</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Test Builder (Visual interface)</li>
                  <li>• Test Script (TypeScript editor)</li>
                  <li>• Format button</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Top Navigation</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Test Editor</li>
                  <li>• Test Manager</li>
                  <li>• Test Reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Action Buttons</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Save (Save current test)</li>
                  <li>• Run Test (Execute test)</li>
                  <li>• Generate Test (AI generation)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Settings</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Theme toggle</li>
                  <li>• Settings panel</li>
                  <li>• GitHub integration</li>
                </ul>
              </div>
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
              Now that you understand the test editor, explore these advanced features:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/ai-test-generation" className="block">
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold mb-2">AI Test Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn how to use AI to generate comprehensive test suites.
                  </p>
                </div>
              </Link>
              <Link href="/guides/framework-integration" className="block">
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold mb-2">Test Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Organize and manage your test suites effectively.
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}