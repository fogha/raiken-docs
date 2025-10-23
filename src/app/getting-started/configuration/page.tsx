import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Configuration

Customize Raiken to fit your project's specific testing needs and workflow requirements.

## Quick Setup

Generate a configuration file with:

\`\`\`bash
raiken init
\`\`\`

This creates \`raiken.config.json\` in your project root with sensible defaults:

\`\`\`json
{
  "projectType": "nextjs",
  "testDirectory": "e2e",
  "outputFormats": ["typescript"],
  "ai": {
    "provider": "openrouter",
    "model": "anthropic/claude-3.5-sonnet"
  },
  "browser": {
    "defaultBrowser": "chromium",
    "headless": true,
    "timeout": 30000
  }
}
\`\`\`

## Environment Variables

Set your OpenRouter API key for AI features:

\`\`\`bash
# .env.local (for project-specific setup)
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxx

# Or set globally
export OPENROUTER_API_KEY=your_api_key_here
\`\`\`

## Test Organization

Raiken automatically detects your test directory. Organize tests by feature:

\`\`\`
tests/
├── auth/                    # Authentication tests
├── dashboard/               # Feature-specific tests  
├── e2e/                     # End-to-end flows
└── fixtures/                # Test data
\`\`\`

## Key Configuration Options

### Browser Settings
\`\`\`json
{
  "browser": {
    "defaultBrowser": "chromium",
    "headless": true,
    "timeout": 30000,
    "viewport": { "width": 1280, "height": 720 }
  }
}
\`\`\`

### Multi-Browser Testing
\`\`\`json
{
  "browsers": ["chromium", "firefox", "webkit"]
}
\`\`\`

## AI Models

Choose from 30+ AI models including:
- **Claude 3.5 Sonnet** (recommended)
- **GPT-4o**, **Gemini Pro**
- **Llama 3.1**, **Mistral Large**

\`\`\`json
{
  "ai": {
    "provider": "openrouter", 
    "model": "anthropic/claude-3.5-sonnet"
  }
}
\`\`\`

## Framework Support

Raiken auto-detects your framework and configures appropriate settings:

- **Next.js** - Port 3000, TypeScript support
- **React/Vite** - Port 5173, modern tooling  
- **Vue.js** - Port 8080, component testing
- **And more** - Angular, Svelte, Nuxt

## Advanced Options

### Bridge Server
The bridge enables local file system integration (auto-enabled):
\`\`\`json
{
  "bridge": {
    "port": 3001,
    "autoStart": true
  }
}
\`\`\`

### Environment-Specific Settings
\`\`\`bash
# Development (non-headless)
raiken start --dev

# CI/Production (headless with retries)  
raiken start --ci
\`\`\`

## Validation

Check your setup:

\`\`\`bash
# Verify configuration
raiken info

# Test connection
raiken start
\`\`\`

---

**Ready to create tests?** Continue to the [Quick Start Guide](/getting-started/quick-start).
`

export default async function ConfigurationPage() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  )
} 