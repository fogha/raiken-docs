import Link from 'next/link'
import { Github, Twitter, ExternalLink } from 'lucide-react'

const navigation = {
  documentation: [
    { name: 'Getting Started', href: '/getting-started' },
    { name: 'Installation', href: '/getting-started/installation' },
    { name: 'Quick Start', href: '/getting-started/quick-start' },
    { name: 'Configuration', href: '/getting-started/configuration' },
  ],
  guides: [
    { name: 'Writing Tests', href: '/guides/writing-tests' },
    { name: 'AI Test Generation', href: '/guides/ai-test-generation' },
    { name: 'Browser Testing', href: '/guides/browser-testing' },
    { name: 'CI/CD Integration', href: '/guides/cicd' },
  ],
  resources: [
    { name: 'Examples', href: '/examples' },
    { name: 'API Reference', href: '/api' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Contributing', href: '/contributing' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded bg-gradient-to-r from-primary/20 to-muted-foreground/20 opacity-75 blur"></div>
                <div className="relative rounded bg-card px-3 py-1 text-sm font-bold text-foreground border">
                  Arten
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Documentation
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              AI-powered test automation tool that combines artificial intelligence with Playwright 
              for modern web application testing.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://github.com/fogha/arten"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://github.com/fogha/arten/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Discussions</span>
              </Link>
            </div>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="text-sm font-semibold">Documentation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.documentation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold">Guides</h3>
            <ul className="mt-4 space-y-2">
              {navigation.guides.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Arten. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link
                href="https://github.com/fogha/arten"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground"
              >
                View on GitHub
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 