import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Quick Start

Get up and running with Arten in under 5 minutes. This guide assumes you have Node.js 18+ installed.

## Method 1: CLI Tool (Recommended)

The fastest way to start using Arten with your existing project:

### Step 1: Clone and Setup
\`\`\`bash
# Clone the repository
git clone https://github.com/fogha/arten.git
cd arten

# Install dependencies
npm install
\`\`\`

### Step 2: Navigate to Your Project
\`\`\`bash
cd my-nextjs-app
\`\`\`

### Step 3: Initialize (Optional)
\`\`\`bash
# Set up Playwright config and test directory
arten init
\`\`\`

This creates:
- Test directory (e2e/, tests/, or appropriate for your framework)
- Playwright configuration file
- Example test file
- Package.json scripts for testing

### Step 4: Start Arten
\`\`\`bash
npm run dev
\`\`\`

This will:
- Start the Arten web interface at \`http://localhost:3000\`
- Open your browser automatically
- Enable test generation and execution features

### Step 5: Set Up AI (Optional)
For AI-powered test generation, add your OpenRouter API key:

\`\`\`bash
# In your project root, create .env.local
echo "OPENROUTER_API_KEY=your_api_key_here" > .env.local
\`\`\`

Get your API key from [OpenRouter](https://openrouter.ai/).

## Method 2: Standalone Application

Run Arten as a standalone web application:

### Step 1: Clone and Install
\`\`\`bash
git clone https://github.com/your-username/arten.git
cd arten
npm install
\`\`\`

### Step 2: Configure Environment
\`\`\`bash
# Copy example environment file
cp .env.example .env.local

# Add your OpenRouter API key
echo "OPENROUTER_API_KEY=your_api_key_here" >> .env.local
\`\`\`

### Step 3: Start Development Server
\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to access Arten.

## Your First Test

### Using AI Generation

1. **Open the Test Builder** - Click "Generate Test" in the right panel
2. **Describe Your Test** in natural language:
   \`\`\`
   Test the login form with valid credentials
   \`\`\`
3. **Generate** - Arten will create a complete Playwright test
4. **Review and Edit** - Use the Monaco editor to refine if needed
5. **Save** - Tests are automatically saved to your project's test directory

### Manual Test Creation

1. **Open Test Editor** - Click "New Test" in the interface
2. **Write Playwright Code** using the Monaco editor with TypeScript support
3. **Use Real-time DOM** - Click elements on the page to get selectors
4. **Execute Tests** - Run tests directly from the interface

## Project Auto-Detection

Arten automatically configures itself based on your project:

| Framework | Detection | Test Directory | Default Port |
|-----------|-----------|----------------|--------------|
| Next.js | \`next\` dependency | \`e2e/\` | 3000 |
| React | \`react\` dependency | \`tests/\` | 3000 |
| Vue | \`vue\` dependency | \`tests/\` | 3000 |
| Svelte | \`svelte\` dependency | \`tests/\` | 5173 |
| Angular | \`@angular/core\` | \`e2e/\` | 4200 |
| Nuxt | \`nuxt\` dependency | \`test/\` | 3000 |

## Key Features Overview

### 🤖 AI-Powered Test Generation
- Natural language to Playwright tests
- Uses Claude 3.5 Sonnet and other advanced models
- Context-aware generation based on your application

### 🌐 Multi-Browser Testing
- Chromium, Firefox, WebKit support
- Configurable browser settings
- Video recording and screenshots

### 📝 Advanced Test Editor
- Monaco editor with TypeScript support
- Syntax highlighting and autocomplete
- Real-time error checking

### 🔄 Local Integration
- Direct file system access via CLI
- Tests saved to your project directory
- Integrates with existing Playwright setup

### 📊 Rich Reporting
- Detailed test execution results
- Video recordings and screenshots
- AI-powered failure analysis

## Common Workflows

### Workflow 1: New Feature Testing
\`\`\`bash
# Start Arten in your project
arten start

# Navigate to your new feature in browser
# Describe the test in natural language
# Generate and refine the test
# Run test to verify functionality
\`\`\`

### Workflow 2: Regression Testing
\`\`\`bash
# Generate tests for critical user paths
# Run tests in CI/CD pipeline
# Review reports and fix issues
\`\`\`

### Workflow 3: Cross-Browser Testing
\`\`\`bash
# Configure multiple browsers in settings
# Run tests across Chromium, Firefox, WebKit
# Compare results and handle browser-specific issues
\`\`\`

## Configuration Quick Reference

### CLI Configuration (\`arten.config.json\`)
\`\`\`json
{
  "projectType": "nextjs",
  "testDirectory": "e2e",
  "playwrightConfig": "playwright.config.ts",
  "ai": {
    "provider": "openrouter",
    "model": "anthropic/claude-3.5-sonnet"
  }
}
\`\`\`

### Environment Variables (\`.env.local\`)
\`\`\`env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet
\`\`\`

## Troubleshooting Quick Fixes

### Port Already in Use
\`\`\`bash
arten start --port 4000
\`\`\`

### Playwright Not Found
\`\`\`bash
npm install -D @playwright/test
npx playwright install
\`\`\`

### AI Generation Not Working
1. Check your \`OPENROUTER_API_KEY\` in \`.env.local\`
2. Verify internet connection
3. Restart Arten: \`npm run dev\`

### File Permission Issues
\`\`\`bash
chmod -R 755 your-project-directory/
\`\`\`

## Next Steps

Now that you have Arten running:

- **[Configuration](/getting-started/configuration)** - Customize settings for your workflow
- **[Writing Tests](/guides/writing-tests)** - Learn testing best practices
- **[AI Test Generation](/guides/ai-test-generation)** - Master AI-powered testing
- **[Examples](/examples)** - See real-world test examples

## Getting Help

- **Documentation**: Complete guides in this documentation site
- **CLI Help**: \`arten --help\` or \`arten <command> --help\`
- **GitHub Issues**: Report bugs and request features
- **Community**: Join discussions and get support

---

**Ready to dive deeper?** Continue with [Configuration](/getting-started/configuration) to customize Arten for your specific needs.
`

export default async function QuickStartPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 