import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Configuration

Customize Arten to fit your project's specific testing needs and workflow requirements.

## Configuration File

Arten uses a configuration file to customize behavior. Generate one with:

\`\`\`bash
arten init
\`\`\`

This creates \`arten.config.js\` in your project root:

\`\`\`javascript
module.exports = {
  // Test directory configuration
  testDir: './tests',
  
  // Playwright configuration
  playwright: {
    use: {
      baseURL: 'http://localhost:3000',
      headless: false,
      viewport: { width: 1280, height: 720 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    projects: [
      { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
      { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
      { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ],
  },
  
  // AI configuration
  ai: {
    model: 'anthropic/claude-3.5-sonnet',
    temperature: 0.1,
    maxTokens: 4000,
  },
  
  // Bridge configuration for local integration
  bridge: {
    port: 3001,
    enabled: true,
    autoStart: true,
  },
  
  // Development server configuration
  devServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 30000,
  },
}
\`\`\`

## Environment Variables

Configure sensitive information using environment variables:

### Local Development (\`.env.local\`)

\`\`\`bash
# OpenRouter API key for AI features
OPENROUTER_API_KEY=your_api_key_here

# Optional: Custom AI model
ARTEN_AI_MODEL=anthropic/claude-3.5-sonnet

# Optional: Custom bridge port
ARTEN_BRIDGE_PORT=3001

# Optional: Development server URL
ARTEN_BASE_URL=http://localhost:3000
\`\`\`

### Global Configuration

For CLI installations, set global configuration:

\`\`\`bash
# Set API key globally
arten config set apiKey your_api_key_here

# Set default model
arten config set aiModel anthropic/claude-3.5-sonnet

# Set default test directory
arten config set testDir ./e2e

# View all configuration
arten config list
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
// arten.config.js
module.exports = {
  testDir: './tests',
  
  // Pattern for test files
  testMatch: '**/*.{test,spec}.{js,ts}',
  
  // Fixtures directory
  fixturesDir: './tests/fixtures',
}
\`\`\`

## Playwright Configuration

Customize Playwright behavior through Arten's configuration:

### Browser Configuration

\`\`\`javascript
// arten.config.js
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
// arten.config.js
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

Customize AI-powered test generation:

### Model Selection

\`\`\`javascript
// arten.config.js
module.exports = {
  ai: {
    // Primary model for test generation
    model: 'anthropic/claude-3.5-sonnet',
    
    // Alternative models for different tasks
    models: {
      generation: 'anthropic/claude-3.5-sonnet',
      analysis: 'openai/gpt-4o',
      refactoring: 'anthropic/claude-3-haiku',
    },
    
    // Model parameters
    temperature: 0.1,      // Lower = more deterministic
    maxTokens: 4000,       // Maximum response length
    topP: 1,               // Nucleus sampling
  },
}
\`\`\`

### Prompt Customization

\`\`\`javascript
// arten.config.js
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
// arten.config.js
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
// arten.config.js
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
// arten.config.js
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
// arten.config.js
module.exports = {
  bridge: {
    // Enable bridge server
    enabled: true,
    
    // Bridge server port
    port: 3001,
    
    // Auto-start bridge with Arten
    autoStart: true,
    
    // Authentication token (optional)
    token: process.env.ARTEN_BRIDGE_TOKEN,
    
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
# Set default configuration directory
arten config set configDir ~/.arten

# Set default project type
arten config set defaultFramework nextjs

# Set debug mode
arten config set debug true

# Set log level
arten config set logLevel info

# Reset all configuration
arten config reset
\`\`\`

## Environment-Specific Configuration

### Development

\`\`\`javascript
// arten.config.dev.js
module.exports = {
  ...require('./arten.config.js'),
  
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
// arten.config.prod.js
module.exports = {
  ...require('./arten.config.js'),
  
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
arten start --config arten.config.dev.js

# Production
arten test --config arten.config.prod.js
\`\`\`

## Validation

Validate your configuration:

\`\`\`bash
# Check configuration
arten config validate

# Show resolved configuration
arten config show

# Test configuration
arten doctor
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