import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# AI Test Generation

Master Raiken's AI-powered test generation capabilities to create comprehensive test suites using intelligent automation.

## Overview

\n\n
Raiken's AI test generation transforms JSON specifications as well as natural language descriptions into complete test suites using advanced language models. This feature accelerates test creation while maintaining high quality and best practices.

## How It Works

### 1. JSON Test Specification

Define your test scenario using structured JSON input:

\`\`\`json
{
  "type": "ui-test",
  "name": "User Login Test",
  "description": "Test user login functionality with valid credentials",
  "steps": [
    {
      "action": "navigate",
      "url": "https://example.com/login"
    },
    {
      "action": "type",
      "element": "input[name='email']",
      "value": "user@example.com"
    },
    {
      "action": "type",
      "element": "input[name='password']",
      "value": "password123"
    },
    {
      "action": "click",
      "element": "button[type='submit']"
    }
  ],
  "assertions": [
    {
      "type": "url",
      "condition": "URL should contain dashboard",
      "pattern": "/dashboard"
    }
  ]
}
\`\`\`

### 2. AI Processing

Raiken processes your specification using:
- **Advanced AI Models** - Multiple AI providers for optimal test generation
- **Context Awareness** - Understanding your application structure
- **Best Practices** - Following modern testing conventions
- **Code Patterns** - Generating clean, maintainable test code

### 3. Generated Test Output

Receive a complete, runnable test:

\`\`\`typescript
import { test, expect } from '@playwright/test'

test('User Login Test', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://example.com/login')
  
  // Fill login form
  await page.fill('input[name="email"]', 'user@example.com')
  await page.fill('input[name="password"]', 'password123')
  
  // Submit login
  await page.click('button[type="submit"]')
  
  // Verify successful login
  await expect(page).toHaveURL(/.*dashboard/)
})
\`\`\`

## Using the Generate Test Feature

### Step 1: Access the Test Editor

1. Navigate to the Raiken platform
2. Click on "Test Editor" in the navigation
3. Click "Generate Test" button

### Step 2: Provide Test Specification

You can provide test input in several ways:

#### JSON Specification (Recommended)
- Structured format for precise test definition
- Supports complex test scenarios
- Easy to version control and maintain

#### Natural Language Description
- Describe your test in plain English
- AI interprets and converts to test code
- Great for quick test creation

### Step 3: Review and Customize

1. **Review Generated Code** - Check the generated test logic
2. **Customize as Needed** - Modify selectors, assertions, or flow
3. **Save the Test** - Use the Save button to store your test
4. **Run the Test** - Execute immediately to verify functionality

## Best Practices

### Writing Effective JSON Specifications

\`\`\`json
{
  "type": "ui-test",
  "name": "Clear, descriptive test name",
  "description": "Detailed description of what the test validates",
  "steps": [
    {
      "action": "navigate",
      "url": "specific-url-or-path"
    },
    {
      "action": "type",
      "element": "specific-selector",
      "value": "test-data"
    }
  ],
  "assertions": [
    {
      "type": "element|url|text",
      "condition": "Clear assertion description",
      "selector": "element-selector",
      "timeout": 5000
    }
  ]
}
\`\`\`

### Supported Actions

- **navigate** - Navigate to a URL
- **click** - Click on an element
- **type** - Type text into an input
- **select** - Select from dropdown
- **wait** - Wait for element or timeout
- **scroll** - Scroll to element

### Supported Assertions

- **element** - Check element visibility/state
- **url** - Verify URL patterns
- **text** - Check text content
- **attribute** - Verify element attributes

## Advanced Features

### Multi-Step Test Flows

Create complex test scenarios with multiple steps:

\`\`\`json
{
  "type": "ui-test",
  "name": "E-commerce Purchase Flow",
  "description": "Complete purchase flow from product selection to checkout",
  "steps": [
    {
      "action": "navigate",
      "url": "/products"
    },
    {
      "action": "click",
      "element": ".product-card:first-child"
    },
    {
      "action": "click",
      "element": ".add-to-cart"
    },
    {
      "action": "navigate",
      "url": "/cart"
    },
    {
      "action": "click",
      "element": ".checkout-button"
    }
  ],
  "assertions": [
    {
      "type": "url",
      "condition": "Should be on checkout page",
      "pattern": "/checkout"
    }
  ]
}
\`\`\`

### Form Testing

Handle complex form interactions:

\`\`\`json
{
  "type": "ui-test",
  "name": "Contact Form Submission",
  "steps": [
    {
      "action": "type",
      "element": "input[name='name']",
      "value": "John Doe"
    },
    {
      "action": "type",
      "element": "input[name='email']",
      "value": "john@example.com"
    },
    {
      "action": "type",
      "element": "textarea[name='message']",
      "value": "Test message content"
    },
    {
      "action": "click",
      "element": "input[type='checkbox'][name='terms']"
    },
    {
      "action": "click",
      "element": "button[type='submit']"
    }
  ]
}
\`\`\`

## Tips for Success

1. **Be Specific** - Use precise selectors and clear descriptions
2. **Test Incrementally** - Start with simple tests and build complexity
3. **Review Generated Code** - Always review and understand the generated tests
4. **Use Meaningful Names** - Give tests descriptive names for better organization
5. **Include Assertions** - Always verify expected outcomes

## Troubleshooting

### Common Issues

**Generated test fails to run:**
- Check selector accuracy
- Verify URL accessibility
- Ensure timing is appropriate

**AI doesn't understand specification:**
- Provide more detailed descriptions
- Use structured JSON format
- Break complex scenarios into smaller steps

**Test is too generic:**
- Add more specific selectors
- Include detailed assertions
- Provide application context

## Next Steps

- Explore [Test Management](/guides/framework-integration) for organizing your tests
- Learn about [Configuration](/getting-started/configuration) for project setup
- Check out [Test Reports](/guides/local-integration) for analyzing test results
`

export default function AITestGenerationGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <MDXRemote source={content} components={mdxComponents} />
    </div>
  )
}