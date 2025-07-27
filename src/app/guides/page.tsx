import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Zap, Code2, Settings, GitBranch, TestTube } from 'lucide-react'

const guides = [
  {
    title: 'Writing Tests',
    description: 'Learn how to create effective test cases using Arten&apos;s AI-powered test generation and advanced editor.',
    href: '/guides/writing-tests',
    icon: <Code2 className="h-6 w-6" />,
    level: 'Beginner',
    estimatedTime: '15 min read'
  },
  {
    title: 'AI Test Generation',
    description: 'Master the art of converting natural language descriptions into comprehensive test suites.',
    href: '/guides/ai-test-generation',
    icon: <Zap className="h-6 w-6" />,
    level: 'Intermediate',
    estimatedTime: '20 min read'
  },
  {
    title: 'Browser Testing',
    description: 'Explore multi-browser testing capabilities across Chromium, Firefox, and WebKit.',
    href: '/guides/browser-testing',
    icon: <TestTube className="h-6 w-6" />,
    level: 'Intermediate',
    estimatedTime: '25 min read'
  },
  {
    title: 'Configuration',
    description: 'Configure Arten for your specific project needs and testing requirements.',
    href: '/guides/configuration',
    icon: <Settings className="h-6 w-6" />,
    level: 'Beginner',
    estimatedTime: '10 min read'
  },
  {
    title: 'CI/CD Integration',
    description: 'Set up continuous integration and deployment pipelines with automated testing.',
    href: '/guides/cicd',
    icon: <GitBranch className="h-6 w-6" />,
    level: 'Advanced',
    estimatedTime: '30 min read'
  },
]

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
          Guides
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Comprehensive guides to help you master Arten&apos;s features and build effective test automation workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-primary">
                {guide.icon}
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={guide.level === 'Beginner' ? 'secondary' : guide.level === 'Advanced' ? 'destructive' : 'default'}
                >
                  {guide.level}
                </Badge>
              </div>
            </div>
            
            <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
              {guide.title}
            </h3>
            
            <p className="mb-4 text-muted-foreground text-sm">
              {guide.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {guide.estimatedTime}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-muted/30 p-8">
        <div className="text-center">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            New to Arten?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Start with our getting started guide to set up Arten and create your first test.
          </p>
          <Link href="/getting-started">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 