import { 
  BookOpen, 
  Zap, 
  Code, 
  FileText, 
  Settings, 
  Play, 
  Globe, 
  Terminal, 
  Layers,
  GitBranch,
  Sparkles,
  Database,
  Github,
  ExternalLink
} from 'lucide-react'

export interface NavItem {
  name: string
  href: string
  description?: string
  icon?: any
  badge?: string
  external?: boolean
}

export interface NavSection {
  title: string
  icon?: any
  items: NavItem[]
}

// Main navigation for header
export const mainNavigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/getting-started' },
  { name: 'Contributing', href: '/contributing' },
]

// Detailed navigation for sidebar and footer
export const detailedNavigation: NavSection[] = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      {
        name: "Overview",
        href: "/getting-started",
        description: "Introduction to Raiken",
        icon: Play
      },
      {
        name: "Installation",
        href: "/getting-started/installation",
        description: "Install and setup",
        icon: Terminal
      },
      {
        name: "Configuration",
        href: "/getting-started/configuration",
        description: "Configure your project",
        icon: Settings
      },
      {
        name: "Quick Start",
        href: "/getting-started/quick-start",
        description: "Create your first test",
        icon: Zap
      }
    ]
  },
  {
    title: "Guides",
    icon: FileText,
    items: [
      {
        name: "Writing Tests",
        href: "/guides/writing-tests",
        description: "Best practices",
        icon: Code
      },
      {
        name: "AI Test Generation",
        href: "/guides/ai-test-generation",
        description: "AI-powered testing",
        icon: Sparkles,
        badge: "Popular"
      },
      {
        name: "Browser Testing",
        href: "/guides/browser-testing",
        description: "Multi-browser support",
        icon: Globe
      },
      {
        name: "Framework Integration",
        href: "/guides/framework-integration",
        description: "Framework-specific setup",
        icon: Layers
      },
      {
        name: "Local Integration",
        href: "/guides/local-integration",
        description: "Local development",
        icon: Terminal
      },
      {
        name: "CI/CD",
        href: "/guides/cicd",
        description: "Continuous integration",
        icon: GitBranch
      }
    ]
  },
  {
    title: "API Reference",
    icon: Database,
    items: [
      {
        name: "REST API",
        href: "/api",
        description: "HTTP endpoints",
        icon: Globe
      },
      {
        name: "CLI Commands",
        href: "/api#cli",
        description: "Command line interface",
        icon: Terminal
      },
      {
        name: "Configuration",
        href: "/api#config",
        description: "Environment variables",
        icon: Settings
      },
      {
        name: "Bridge API",
        href: "/api#bridge",
        description: "Local HTTP API",
        icon: Layers
      }
    ]
  },
  {
    title: "Examples",
    icon: Code,
    items: [
      {
        name: "Code Examples",
        href: "/examples",
        description: "Ready-to-use examples",
        icon: Code
      },
      {
        name: "Basic Tests",
        href: "/examples#basic",
        description: "Simple test patterns",
        icon: Play
      },
      {
        name: "Form Testing",
        href: "/examples#forms",
        description: "Form interaction tests",
        icon: FileText
      },
      {
        name: "AI Generated",
        href: "/examples#ai-generated",
        description: "AI-powered examples",
        icon: Sparkles
      }
    ]
  },
  {
    title: "Resources",
    icon: FileText,
    items: [
      {
        name: "Contributing",
        href: "/contributing",
        description: "How to contribute",
        icon: Github
      }
    ]
  }
]

// Footer-specific navigation (flattened for footer layout)
export const footerNavigation = {
  documentation: detailedNavigation[0].items,
  guides: detailedNavigation[1].items,
  resources: [
    ...detailedNavigation[2].items,
    ...detailedNavigation[3].items,
    ...detailedNavigation[4].items
  ]
}

// Quick action links
export const quickLinks: NavItem[] = [
  {
    name: "Live Demo",
    href: "http://84.46.245.248:3000/tests/editor",
    description: "Try Raiken online",
    icon: Play,
    external: true
  },
  {
    name: "GitHub",
    href: "https://github.com/fogha/raiken",
    description: "View source code",
    icon: Github,
    external: true
  },
  {
    name: "Get Started",
    href: "/getting-started",
    description: "Start using Raiken",
    icon: Zap
  }
]

// Utility functions
export const isActiveLink = (href: string, pathname: string): boolean => {
  if (href === '/') {
    return pathname === '/'
  }
  return pathname === href || pathname.startsWith(href + '/')
}

export const findActiveSection = (pathname: string): string | null => {
  for (const section of detailedNavigation) {
    for (const item of section.items) {
      if (isActiveLink(item.href, pathname)) {
        return section.title
      }
    }
  }
  return null
}
