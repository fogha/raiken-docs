import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Configuration

Customize Raiken to fit your project's specific testing needs and workflow requirements.

## Configuration File

Raiken uses a configuration file to customize behavior. Generate one with:

\`\`\`bash
raiken init
\`\`\`

This creates \`raiken.config.json\` in your project root:

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

## Environment Variables

Configure sensitive information using environment variables:

### Local Development (\`.env.local\`)

\`\`\`bash
# Required for AI features
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxx

# Optional customization
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet
OPENROUTER_REFERRER=https://your-app.com
OPENROUTER_TITLE=Your App Name
\`\`\`

### Global Configuration

For CLI installations, set global configuration:

\`\`\`bash
# Set API key globally using environment variable
export OPENROUTER_API_KEY=your_api_key_here

# Configuration is managed through raiken.config.js file
# Edit the file directly to set model, test directory, etc.
\`\`\`

## Test Directory Structure

Organize your tests with a clear structure:

\`\`\`
tests/
├── auth/                    # Authentication tests
│   ├── login.spec.ts
│   ├── registration.spec.ts
│   └── password-reset.spec.ts
├── dashboard/               # Dashboard feature tests
│   ├── overview.spec.ts
│   ├── settings.spec.ts
│   └── navigation.spec.ts
├── e2e/                     # End-to-end user journeys
│   ├── checkout-flow.spec.ts
│   └── user-onboarding.spec.ts
├── fixtures/                # Test data and utilities
│   ├── users.json
│   └── test-data.ts
└── utils/                   # Helper functions
    ├── page-objects.ts
    └── test-helpers.ts
\`\`\`

Configure the test directory:

\`\`\`javascript
// raiken.config.js
module.exports = {
  testDir: './tests',
  
  // Pattern for test files
  testMatch: '**/*.{test,spec}.{js,ts}',
  
  // Fixtures directory
  fixturesDir: './tests/fixtures',
}
\`\`\`

## Playwright Configuration

Customize Playwright behavior through Raiken's configuration:

### Browser Configuration

\`\`\`javascript
// raiken.config.js
module.exports = {
  playwright: {
    use: {
      // Base URL for your application
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      
      // Browser viewport
      viewport: { width: 1280, height: 720 },
      
      // Screenshots and videos
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      
      // Trace collection
      trace: 'on-first-retry',
      
      // Timeouts
      actionTimeout: 30000,
      navigationTimeout: 30000,
    },
    
    // Multi-browser testing
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
      {
        name: 'mobile-chrome',
        use: { ...devices['Pixel 5'] },
      },
    ],
    
    // Test execution
    workers: process.env.CI ? 1 : undefined,
    retries: process.env.CI ? 2 : 0,
    timeout: 30000,
  },
}
\`\`\`

### Custom Fixtures

Set up global fixtures and page objects:

\`\`\`javascript
// raiken.config.js
module.exports = {
  playwright: {
    // Global setup
    globalSetup: './tests/global-setup.ts',
    globalTeardown: './tests/global-teardown.ts',
    
    use: {
      // Custom storage state
      storageState: './tests/fixtures/auth.json',
      
      // Extra HTTP headers
      extraHTTPHeaders: {
        'Accept-Language': 'en-US,en;q=0.9',
      },
    },
  },
}
\`\`\`

## AI Configuration

Customize AI-powered test generation. Raiken supports a wide range of AI models through OpenRouter:

### Supported AI Models

Raiken supports a comprehensive range of AI models:

- **Anthropic Claude**: 3.5 Sonnet, 3.5 Haiku, 3 Opus
- **OpenAI GPT**: GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo
- **Google Gemini**: Pro 1.5, Flash 1.5
- **Meta Llama**: 3.1 (405B, 70B, 8B variants)
- **Mistral**: Large, Medium, Small, Mixtral variants
- **And many more**: Cohere, Perplexity, Qwen, DBRX

### Model Configuration

\`\`\`json
{
  "ai": {
    "provider": "openrouter",
    "model": "anthropic/claude-3.5-sonnet"
  }
}
\`\`\`

Set via environment variables:
\`\`\`bash
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet
\`\`\`

### Prompt Customization

\`\`\`javascript
// raiken.config.js
module.exports = {
  ai: {
    prompts: {
      // Custom system prompt
      system: \`You are an expert test automation engineer. 
                Generate high-quality Playwright tests that are:
                - Reliable and maintainable
                - Use data-testid selectors when possible
                - Include proper assertions
                - Follow best practices\`,
      
      // Test generation prompt template
      generation: \`Generate a Playwright test for: {description}
                   
                   Requirements:
                   - Use TypeScript
                   - Include proper imports
                   - Add descriptive test names
                   - Use appropriate selectors
                   - Include meaningful assertions\`,
    },
  },
}
\`\`\`

## Framework-Specific Configuration

### Next.js Projects

\`\`\`javascript
// raiken.config.js
module.exports = {
  framework: 'nextjs',
  
  devServer: {
    command: 'npm run dev',
    port: 3000,
    env: {
      NODE_ENV: 'test',
    },
  },
  
  playwright: {
    use: {
      baseURL: 'http://localhost:3000',
    },
  },
}
\`\`\`

### React/Vite Projects

\`\`\`javascript
// raiken.config.js
module.exports = {
  framework: 'react',
  
  devServer: {
    command: 'npm run dev',
    port: 5173,  // Vite default port
  },
  
  playwright: {
    use: {
      baseURL: 'http://localhost:5173',
    },
  },
}
\`\`\`

### Vue.js Projects

\`\`\`javascript
// raiken.config.js
module.exports = {
  framework: 'vue',
  
  devServer: {
    command: 'npm run serve',
    port: 8080,
  },
  
  playwright: {
    use: {
      baseURL: 'http://localhost:8080',
    },
  },
}
\`\`\`

## Bridge Configuration

The bridge enables local file system integration:

\`\`\`javascript
// raiken.config.js
module.exports = {
  bridge: {
    // Enable bridge server
    enabled: true,
    
    // Bridge server port
    port: 3001,
    
    // Auto-start bridge with Raiken
    autoStart: true,
    
    // Authentication token (optional)
    token: process.env.RAIKEN_BRIDGE_TOKEN,
    
    // File watching
    watch: {
      enabled: true,
      patterns: ['**/*.spec.ts', '**/*.test.ts'],
      ignored: ['node_modules/**'],
    },
    
    // File operations
    operations: {
      read: true,
      write: true,
      delete: false,  // Disable for safety
    },
  },
}
\`\`\`

## CLI Configuration

Configure CLI behavior globally:

\`\`\`bash
# Configuration is managed through raiken.config.js file in your project
# Edit the configuration file directly to customize settings
\`\`\`

## Environment-Specific Configuration

### Development

\`\`\`javascript
// raiken.config.dev.js
module.exports = {
  ...require('./raiken.config.js'),
  
  playwright: {
    use: {
      headless: false,
      slowMo: 100,
    },
    workers: 1,
  },
  
  ai: {
    model: 'anthropic/claude-3-haiku',  // Faster for development
  },
}
\`\`\`

### Production/CI

\`\`\`javascript
// raiken.config.prod.js
module.exports = {
  ...require('./raiken.config.js'),
  
  playwright: {
    use: {
      headless: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    workers: process.env.CI ? 1 : 4,
    retries: 2,
  },
  
  bridge: {
    enabled: false,  // Disable in CI
  },
}
\`\`\`

Use environment-specific configs:

\`\`\`bash
# Development
raiken start --config raiken.config.dev.js

# Production - use Playwright directly with custom config
npx playwright test --config=raiken.config.prod.js
\`\`\`

## Validation

Validate your configuration:

\`\`\`bash
# Check project information
raiken info

# Start bridge server for remote access
raiken remote
\`\`\`

## Next Steps

With your configuration set up:

- **[Quick Start](/getting-started/quick-start)** - Create your first test
- **[Writing Tests](/guides/writing-tests)** - Learn testing best practices
- **[AI Test Generation](/guides/ai-test-generation)** - Master AI features
- **[Browser Testing](/guides/browser-testing)** - Multi-browser testing

---

**Ready to create tests?** Continue to the [Quick Start Guide](/getting-started/quick-start).
`

export default async function ConfigurationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 