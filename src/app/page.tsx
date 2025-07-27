import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, Zap, Code2, Shield, Sparkles, Github } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-muted-foreground/20 opacity-75 blur"></div>
                <div className="relative rounded-lg bg-card px-6 py-3 border">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Arten
                  </h1>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-light text-muted-foreground sm:text-3xl">
              AI-Powered Test Automation Tool
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              Modern web application testing that combines AI with Playwright for automated testing.
              Create, manage, and execute tests with real-time status tracking and comprehensive reporting.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/getting-started">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/guides">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Arten?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Powerful features designed to make test automation accessible, efficient, and reliable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="AI-Powered Test Generation"
              description="Transform natural language descriptions into complete Playwright tests using advanced AI models."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Multi-Browser Support"
              description="Test across Chromium, Firefox, and WebKit browsers with consistent results and comprehensive coverage."
            />
            <FeatureCard
              icon={<Code2 className="h-8 w-8" />}
              title="Advanced Test Editor"
              description="Monaco editor with TypeScript support, syntax highlighting, and intelligent autocomplete."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Local Integration"
              description="Direct file system access via CLI bridge for seamless local development workflow."
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Rich Reporting"
              description="Video recording, screenshots, and AI-powered analysis for comprehensive test results."
            />
            <FeatureCard
              icon={<Github className="h-8 w-8" />}
              title="Open Source"
              description="Fully open source with active community contributions and transparent development."
            />
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              Get Started in Minutes
            </h2>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Install the CLI</h3>
                      <code className="mt-2 block rounded bg-muted p-2 text-sm">
                        npm install -g @arten/cli
                      </code>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Navigate to your project</h3>
                      <code className="mt-2 block rounded bg-muted p-2 text-sm">
                        cd my-nextjs-app
                      </code>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Start Arten</h3>
                      <code className="mt-2 block rounded bg-muted p-2 text-sm">
                        arten start
                      </code>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/getting-started/installation">
                    <Button>
                      View Complete Installation Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="mb-4 text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
