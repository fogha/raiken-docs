import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Puzzle, Code2, Zap, CheckCircle, AlertTriangle, ExternalLink, ArrowRight, Settings, FileCode } from 'lucide-react'

export default function FrameworkIntegrationGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Puzzle className="h-6 w-6 text-purple-500" />
          <Badge variant="outline" className="text-sm">Integration</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Framework Integration</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to integrate Arten with different testing frameworks and adapt to your existing workflow.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              Framework-Agnostic Design
            </CardTitle>
            <CardDescription>
              Arten's AI-powered test generation is designed to work with any testing framework
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              While Arten currently generates Playwright tests out of the box, its architecture is designed to be framework-agnostic. 
              The AI understands testing concepts and can adapt to different frameworks' syntax and patterns.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Current Support</h4>
                  <p className="text-sm text-muted-foreground">Playwright (full integration)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Future Support</h4>
                  <p className="text-sm text-muted-foreground">Cypress, Jest, Vitest, TestCafe</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Integration: Playwright */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-5 w-5 text-green-500" />
              Current Integration: Playwright
            </CardTitle>
            <CardDescription>
              Full integration with Playwright for end-to-end testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">What's Included</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  AI-powered test generation using Playwright APIs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Multi-browser support (Chromium, Firefox, WebKit)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Visual test editor with TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Test execution and reporting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Local file system integration
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Generated Test Example</h4>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  <span className="text-blue-400">import</span> {`{ test, expect }`} <span className="text-blue-400">from</span> <span className="text-yellow-400">'@playwright/test'</span><br />
                  <br />
                  <span className="text-blue-400">test</span>(<span className="text-yellow-400">'user can login successfully'</span>, <span className="text-blue-400">async</span> ({`{ page }`}) =&gt; {`{`}<br />
                  &nbsp;&nbsp;<span className="text-blue-400">await</span> page.goto(<span className="text-yellow-400">'/login'</span>)<br />
                  &nbsp;&nbsp;<span className="text-blue-400">await</span> page.fill(<span className="text-yellow-400">'[data-testid="email"]'</span>, <span className="text-yellow-400">'user@example.com'</span>)<br />
                  &nbsp;&nbsp;<span className="text-blue-400">await</span> page.fill(<span className="text-yellow-400">'[data-testid="password"]'</span>, <span className="text-yellow-400">'password123'</span>)<br />
                  &nbsp;&nbsp;<span className="text-blue-400">await</span> page.click(<span className="text-yellow-400">'[data-testid="login-btn"]'</span>)<br />
                  &nbsp;&nbsp;<span className="text-blue-400">await</span> expect(page).toHaveURL(<span className="text-yellow-400">'/dashboard'</span>)<br />
                  {`}`})
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Framework Adaptation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-purple-500" />
              Adapting to Other Frameworks
            </CardTitle>
            <CardDescription>
              How Arten's AI can be adapted to work with different testing frameworks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="cypress" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="cypress">Cypress</TabsTrigger>
                <TabsTrigger value="jest">Jest</TabsTrigger>
                <TabsTrigger value="vitest">Vitest</TabsTrigger>
                <TabsTrigger value="testcafe">TestCafe</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cypress" className="space-y-4">
                <h4 className="font-semibold">Cypress Integration (Future)</h4>
                <p className="text-sm text-muted-foreground">
                  How the same AI-generated test would look in Cypress:
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    describe(<span className="text-yellow-400">'User Authentication'</span>, () =&gt; {`{`}<br />
                    &nbsp;&nbsp;it(<span className="text-yellow-400">'should login successfully'</span>, () =&gt; {`{`}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;cy.visit(<span className="text-yellow-400">'/login'</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;cy.get(<span className="text-yellow-400">'[data-testid="email"]'</span>).type(<span className="text-yellow-400">'user@example.com'</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;cy.get(<span className="text-yellow-400">'[data-testid="password"]'</span>).type(<span className="text-yellow-400">'password123'</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;cy.get(<span className="text-yellow-400">'[data-testid="login-btn"]'</span>).click()<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;cy.url().should(<span className="text-yellow-400">'include'</span>, <span className="text-yellow-400">'/dashboard'</span>)<br />
                    &nbsp;&nbsp;{`}`})<br />
                    {`}`})
                  </code>
                </div>
              </TabsContent>
              
              <TabsContent value="jest" className="space-y-4">
                <h4 className="font-semibold">Jest Integration (Future)</h4>
                <p className="text-sm text-muted-foreground">
                  Jest with Testing Library approach:
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    <span className="text-blue-400">import</span> {`{ render, screen, fireEvent }`} <span className="text-blue-400">from</span> <span className="text-yellow-400">'@testing-library/react'</span><br />
                    <br />
                    describe(<span className="text-yellow-400">'Login Component'</span>, () =&gt; {`{`}<br />
                    &nbsp;&nbsp;test(<span className="text-yellow-400">'should handle login submission'</span>, <span className="text-blue-400">async</span> () =&gt; {`{`}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;render(&lt;LoginForm /&gt;)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;fireEvent.change(screen.getByTestId(<span className="text-yellow-400">'email'</span>), {`{`}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target: {`{ value: 'user@example.com' }`}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`})<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;fireEvent.click(screen.getByTestId(<span className="text-yellow-400">'login-btn'</span>))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;expect(mockNavigate).toHaveBeenCalledWith(<span className="text-yellow-400">'/dashboard'</span>)<br />
                    &nbsp;&nbsp;{`}`})<br />
                    {`}`})
                  </code>
                </div>
              </TabsContent>
              
              <TabsContent value="vitest" className="space-y-4">
                <h4 className="font-semibold">Vitest Integration (Future)</h4>
                <p className="text-sm text-muted-foreground">
                  Similar to Jest but with Vitest syntax:
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    <span className="text-blue-400">import</span> {`{ test, expect, vi }`} <span className="text-blue-400">from</span> <span className="text-yellow-400">'vitest'</span><br />
                    <br />
                    test(<span className="text-yellow-400">'user authentication flow'</span>, <span className="text-blue-400">async</span> () =&gt; {`{`}<br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> mockFetch = vi.fn()<br />
                    &nbsp;&nbsp;global.fetch = mockFetch<br />
                    &nbsp;&nbsp;<br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> loginUser(<span className="text-yellow-400">'user@example.com'</span>, <span className="text-yellow-400">'password123'</span>)<br />
                    &nbsp;&nbsp;expect(response.success).toBe(<span className="text-blue-400">true</span>)<br />
                    &nbsp;&nbsp;expect(mockFetch).toHaveBeenCalledWith(<span className="text-yellow-400">'/api/login'</span>)<br />
                    {`}`})
                  </code>
                </div>
              </TabsContent>
              
              <TabsContent value="testcafe" className="space-y-4">
                <h4 className="font-semibold">TestCafe Integration (Future)</h4>
                <p className="text-sm text-muted-foreground">
                  TestCafe's unique syntax approach:
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    <span className="text-blue-400">import</span> {`{ Selector }`} <span className="text-blue-400">from</span> <span className="text-yellow-400">'testcafe'</span><br />
                    <br />
                    fixture(<span className="text-yellow-400">'User Authentication'</span>)<br />
                    &nbsp;&nbsp;.page(<span className="text-yellow-400">'http://localhost:3000/login'</span>)<br />
                    <br />
                    test(<span className="text-yellow-400">'Login with valid credentials'</span>, <span className="text-blue-400">async</span> t =&gt; {`{`}<br />
                    &nbsp;&nbsp;<span className="text-blue-400">await</span> t<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;.typeText(Selector(<span className="text-yellow-400">'[data-testid="email"]'</span>), <span className="text-yellow-400">'user@example.com'</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;.typeText(Selector(<span className="text-yellow-400">'[data-testid="password"]'</span>), <span className="text-yellow-400">'password123'</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;.click(Selector(<span className="text-yellow-400">'[data-testid="login-btn"]'</span>))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;.expect(getLocation()).contains(<span className="text-yellow-400">'/dashboard'</span>)<br />
                    {`}`})
                  </code>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-orange-500" />
              Best Practices
            </CardTitle>
            <CardDescription>
              Writing framework-agnostic test descriptions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Focus on user actions and expectations, not implementation details:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-green-600">✅ Good</h5>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border-l-4 border-green-500">
                  <p className="text-sm italic">
                    "Test login with valid credentials"
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-red-600">❌ Avoid</h5>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border-l-4 border-red-500">
                  <p className="text-sm italic">
                    "Use page.fill() and expect().toHaveURL()"
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Roadmap */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-500" />
              Integration Roadmap
            </CardTitle>
            <CardDescription>
              Planned framework integrations and timeline
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full w-3 h-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-600">Current: Playwright</h4>
                  <p className="text-sm text-muted-foreground">Full integration with test generation, execution, and reporting</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 rounded-full w-3 h-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-orange-600">Next: Cypress</h4>
                  <p className="text-sm text-muted-foreground">Popular choice for E2E testing with great developer experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full w-3 h-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-blue-600">Future: Jest/Vitest</h4>
                  <p className="text-sm text-muted-foreground">Unit and integration testing support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 rounded-full w-3 h-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-purple-600">Future: TestCafe</h4>
                  <p className="text-sm text-muted-foreground">Cross-browser testing without WebDriver</p>
                </div>
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
              Ready to start using Arten with your current framework?
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/cli-setup">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">CLI Setup</h4>
                    <p className="text-sm text-muted-foreground">Get started with Arten CLI installation</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/ai-test-generation">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">AI Test Generation</h4>
                    <p className="text-sm text-muted-foreground">Learn how to generate tests with AI</p>
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