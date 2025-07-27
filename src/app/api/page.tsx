import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# API Reference

Complete reference for Arten's API endpoints, configuration options, and integration interfaces.

## CLI API

### Global Commands

#### \`arten start\`
Start the Arten web interface for the current project.

\`\`\`bash
arten start [options]
\`\`\`

**Options:**
- \`-p, --port <port>\` - Port to run the server on (default: 3456)
- \`--no-open\` - Don't open browser automatically
- \`--config <path>\` - Custom config file path

**Example:**
\`\`\`bash
arten start --port 4000 --no-open
\`\`\`

#### \`arten init\`
Initialize Arten in the current project.

\`\`\`bash
arten init [options]
\`\`\`

**Options:**
- \`--force\` - Overwrite existing configuration
- \`--framework <type>\` - Specify framework (nextjs, react, vue, etc.)
- \`--test-dir <path>\` - Custom test directory

**Example:**
\`\`\`bash
arten init --framework nextjs --test-dir e2e
\`\`\`

#### \`arten info\`
Display project information and configuration.

\`\`\`bash
arten info
\`\`\`

**Output:**
\`\`\`
🎭 Arten Project Information

Project Name: my-nextjs-app
Project Type: nextjs
Test Directory: e2e
Package Manager: npm
✓ Playwright is configured
Test Command: npm run test:e2e
\`\`\`

### Configuration API

#### Configuration File (\`arten.config.json\`)

\`\`\`json
{
  "projectType": "nextjs",
  "testDirectory": "e2e",
  "playwrightConfig": "playwright.config.ts",
  "outputFormats": ["typescript"],
  "ai": {
    "provider": "openrouter",
    "model": "anthropic/claude-3.5-sonnet"
  },
  "features": {
    "video": true,
    "screenshots": true,
    "tracing": false,
    "network": true
  },
  "browser": {
    "defaultBrowser": "chromium",
    "headless": true,
    "timeout": 30000,
    "retries": 1
  }
}
\`\`\`

## Web Application API

### Browser Control API

#### GET \`/api/browser\`
Get current browser status and configuration.

**Response:**
\`\`\`json
{
  "status": "launched",
  "url": "https://example.com",
  "browser": "chromium",
  "viewport": {
    "width": 1280,
    "height": 720
  }
}
\`\`\`

#### POST \`/api/browser\`
Control browser navigation and actions.

**Request Body:**
\`\`\`json
{
  "action": "navigate",
  "url": "https://example.com"
}
\`\`\`

**Actions:**
- \`navigate\` - Navigate to URL
- \`reload\` - Reload current page
- \`goBack\` - Go back in history
- \`goForward\` - Go forward in history

#### POST \`/api/browser/launch\`
Launch a new browser instance.

**Request Body:**
\`\`\`json
{
  "browser": "chromium",
  "headless": false,
  "viewport": {
    "width": 1280,
    "height": 720
  }
}
\`\`\`

#### DELETE \`/api/browser\`
Close the current browser instance.

### DOM Extraction API

#### GET \`/api/browser/dom\`
Extract DOM tree from current page.

**Query Parameters:**
- \`simplify\` - Simplify DOM structure (default: true)
- \`includeStyles\` - Include computed styles (default: false)

**Response:**
\`\`\`json
{
  "success": true,
  "dom": {
    "tagName": "html",
    "attributes": {},
    "children": [...]
  },
  "url": "https://example.com",
  "timestamp": "2024-12-XX"
}
\`\`\`

#### POST \`/api/browser/element\`
Get element information by selector.

**Request Body:**
\`\`\`json
{
  "selector": "[data-testid='login-button']",
  "action": "getInfo"
}
\`\`\`

**Response:**
\`\`\`json
{
  "element": {
    "tagName": "button",
    "text": "Login",
    "attributes": {
      "data-testid": "login-button",
      "type": "submit"
    },
    "boundingBox": {
      "x": 100,
      "y": 200,
      "width": 80,
      "height": 32
    }
  }
}
\`\`\`

### Test Generation API

#### POST \`/api/test/generate\`
Generate a test using AI.

**Request Body:**
\`\`\`json
{
  "description": "Test user login with valid credentials",
  "context": {
    "url": "https://example.com/login",
    "elements": [...],
    "framework": "playwright"
  },
  "options": {
    "model": "anthropic/claude-3.5-sonnet",
    "includeAssertions": true,
    "outputFormat": "typescript"
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "test": {
    "name": "user-login-test",
    "code": "import { test, expect } from '@playwright/test'...",
    "description": "Test user login with valid credentials",
    "metadata": {
      "model": "anthropic/claude-3.5-sonnet",
      "tokens": 1234,
      "generatedAt": "2024-12-XX"
    }
  }
}
\`\`\`

#### POST \`/api/test/execute\`
Execute a test script.

**Request Body:**
\`\`\`json
{
  "code": "test('should login', async ({ page }) => { ... })",
  "config": {
    "browser": "chromium",
    "headless": true,
    "timeout": 30000,
    "retries": 1
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "results": {
    "status": "passed",
    "duration": 2456,
    "screenshots": ["screenshot1.png"],
    "videos": ["test-video.webm"],
    "errors": [],
    "output": "Test execution output..."
  }
}
\`\`\`

### File System API (CLI Bridge)

#### GET \`/api/files\`
List files in the project directory.

**Query Parameters:**
- \`path\` - Directory path (default: test directory)
- \`extension\` - Filter by file extension

**Response:**
\`\`\`json
{
  "files": [
    {
      "name": "login.spec.ts",
      "path": "e2e/login.spec.ts",
      "size": 1234,
      "modified": "2024-12-XX"
    }
  ]
}
\`\`\`

#### POST \`/api/files\`
Create or update a file.

**Request Body:**
\`\`\`json
{
  "path": "e2e/new-test.spec.ts",
  "content": "import { test, expect } from '@playwright/test'...",
  "overwrite": false
}
\`\`\`

#### DELETE \`/api/files\`
Delete a file.

**Request Body:**
\`\`\`json
{
  "path": "e2e/old-test.spec.ts"
}
\`\`\`

## JavaScript SDK

### Browser Integration

\`\`\`javascript
import { ArtenBrowser } from '@arten/sdk'

const browser = new ArtenBrowser({
  apiUrl: 'http://localhost:3456',
  apiKey: 'your-api-key'
})

// Launch browser
await browser.launch({ headless: false })

// Navigate to page
await browser.navigate('https://example.com')

// Extract DOM
const dom = await browser.getDom()

// Generate test
const test = await browser.generateTest({
  description: 'Test navigation',
  elements: dom.elements
})
\`\`\`

### Test Generator

\`\`\`javascript
import { TestGenerator } from '@arten/sdk'

const generator = new TestGenerator({
  apiKey: process.env.OPENROUTER_API_KEY,
  model: 'anthropic/claude-3.5-sonnet'
})

const test = await generator.generate({
  description: 'Test user registration form',
  context: {
    url: 'https://app.example.com/register',
    elements: [...],
    userStory: 'As a user, I want to register...'
  }
})

console.log(test.code)
\`\`\`

## Environment Variables

### Required Variables

\`\`\`env
# OpenRouter API key for AI features
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxx
\`\`\`

### Optional Variables

\`\`\`env
# Custom AI model
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet

# API configuration
ARTEN_API_URL=http://localhost:3000
ARTEN_API_KEY=your-api-key

# Development settings
ARTEN_DEBUG=true
ARTEN_LOG_LEVEL=info
\`\`\`

## Error Handling

### Standard Error Response

\`\`\`json
{
  "success": false,
  "error": {
    "code": "BROWSER_NOT_LAUNCHED",
    "message": "Browser instance is not running",
    "details": {
      "suggestion": "Call /api/browser/launch first"
    }
  }
}
\`\`\`

### Error Codes

| Code | Description | Solution |
|------|-------------|----------|
| \`BROWSER_NOT_LAUNCHED\` | Browser not running | Launch browser first |
| \`INVALID_SELECTOR\` | CSS selector invalid | Check selector syntax |
| \`ELEMENT_NOT_FOUND\` | Element not found | Verify element exists |
| \`NAVIGATION_FAILED\` | Page navigation failed | Check URL and network |
| \`AI_GENERATION_FAILED\` | Test generation failed | Check API key and quota |
| \`FILE_ACCESS_DENIED\` | File system access denied | Check permissions |

## Rate Limits

### API Rate Limits

| Endpoint | Rate Limit | Window |
|----------|------------|--------|
| \`/api/test/generate\` | 10 requests | 1 minute |
| \`/api/browser/*\` | 100 requests | 1 minute |
| \`/api/files/*\` | 50 requests | 1 minute |

### OpenRouter Limits

Rate limits depend on your OpenRouter plan:
- **Free**: 20 requests/minute
- **Paid**: Higher limits based on plan

## Webhooks

### Test Completion Webhook

Configure webhooks to receive test completion notifications:

\`\`\`json
{
  "event": "test.completed",
  "timestamp": "2024-12-XX",
  "data": {
    "testId": "test-123",
    "status": "passed",
    "duration": 2456,
    "results": {...}
  }
}
\`\`\`

### Browser Events

\`\`\`json
{
  "event": "browser.navigation",
  "timestamp": "2024-12-XX", 
  "data": {
    "url": "https://example.com",
    "title": "Example Page"
  }
}
\`\`\`

## Authentication

### API Key Authentication

Include API key in requests:

\`\`\`bash
curl -H "Authorization: Bearer your-api-key" \
     http://localhost:3456/api/browser
\`\`\`

### Bridge Token Authentication

For CLI bridge connections:

\`\`\`bash
curl -H "X-Bridge-Token: secure-token" \
     http://localhost:3001/api/files
\`\`\`

## OpenAPI Specification

Download the complete OpenAPI specification:

- **Swagger UI**: [http://localhost:3456/api/docs](http://localhost:3456/api/docs)
- **OpenAPI JSON**: [http://localhost:3456/api/openapi.json](http://localhost:3456/api/openapi.json)

## SDKs and Libraries

### Official SDKs

- **Node.js**: \`npm install @arten/sdk\`
- **Python**: \`pip install arten-sdk\`
- **CLI**: \`npm install -g @arten/cli\`

### Community Libraries

- **Go**: \`go get github.com/community/arten-go\`
- **Rust**: \`cargo add arten\`
- **Java**: Maven/Gradle packages available

## Next Steps

- **[Examples](/examples)** - See API usage examples
- **[CLI Documentation](https://github.com/your-username/arten/tree/main/cli)** - Complete CLI reference
- **[SDK Documentation](https://github.com/your-username/arten/tree/main/sdk)** - SDK guides

---

**Need help?** Join our [GitHub Discussions](https://github.com/your-username/arten/discussions) for API support and questions.
`

export default async function APIPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 