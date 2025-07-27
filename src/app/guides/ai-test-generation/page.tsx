import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# AI Test Generation

Master Arten's AI-powered test generation capabilities to create comprehensive test suites from natural language descriptions.

## Overview

Arten's AI test generation transforms natural language descriptions into complete Playwright tests using advanced language models. This feature accelerates test creation while maintaining high quality and best practices.

## How It Works

### 1. Natural Language Input

Describe your test scenario in plain English:

\`\`\`text
Test user registration flow with email verification
\`\`\`

### 2. AI Processing

Arten processes your description using:
- **Claude 3.5 Sonnet** - Primary model for test generation
- **Context awareness** - Understanding your application structure
- **Best practices** - Following Playwright and testing conventions
- **Code patterns** - Learning from your existing test patterns

### 3. Generated Test Output

Receive a complete, runnable test:

\`\`\`typescript
import { test, expect } from '@playwright/test'

test('user registration flow with email verification', async ({ page }) => {
  // Navigate to registration page
  await page.goto('/register')
  
  // Fill registration form
  await page.fill('[data-testid="email"]', 'user@example.com')
  await page.fill('[data-testid="password"]', 'SecurePassword123!')
  await page.fill('[data-testid="confirm-password"]', 'SecurePassword123!')
  
  // Submit registration
  await page.click('[data-testid="register-button"]')
  
  // Verify email verification message
  await expect(page.locator('[data-testid="verification-message"]'))
    .toHaveText('Please check your email to verify your account')
  
  // Verify redirect to verification page
  await expect(page).toHaveURL(/.*\/verify-email/)
})
\`\`\`

## AI Models Available

### Primary Models

**Claude 3.5 Sonnet** (Recommended)
- Excellent at understanding complex scenarios
- Generates clean, maintainable test code
- Strong grasp of testing best practices
- Good at handling edge cases

**GPT-4o**
- Fast generation speeds
- Good for simple to medium complexity tests
- Reliable for standard patterns

**Claude 3 Haiku**
- Ultra-fast generation
- Best for simple tests and quick iterations
- Lower cost option for development

### Model Configuration

Configure your preferred model:

\`\`\`javascript
// arten.config.js
module.exports = {
  ai: {
    model: 'anthropic/claude-3.5-sonnet',
    temperature: 0.1,  // Lower = more consistent
    maxTokens: 4000,
  }
}
\`\`\`

## Writing Effective Prompts

### Basic Prompts

For simple scenarios, keep it concise:

\`\`\`text
Test login with valid credentials
Test form validation with empty fields
Test search functionality with filters
\`\`\`

### Detailed Prompts

For complex flows, provide more context:

\`\`\`text
Test e-commerce checkout process:
1. Add multiple items to cart
2. Apply discount code
3. Fill shipping address with autocomplete
4. Select express shipping
5. Enter payment details
6. Verify order summary before confirmation
7. Complete purchase and verify confirmation page
\`\`\`

### Structured Prompts

Use structured formats for comprehensive tests:

\`\`\`text
Feature: User Profile Management
Scenario: Update profile information
Given: User is logged in with existing profile
When: User updates name, email, and profile picture
Then: Changes are saved and reflected immediately
And: Email verification is required for email changes
Also: Profile picture is uploaded and displayed
\`\`\`

## Advanced Prompt Techniques

### Including Context

Provide application context for better results:

\`\`\`text
Test dashboard analytics for SaaS application:
- Application uses React with data-testid attributes
- Charts are rendered using Chart.js
- Date filters use react-datepicker
- API calls load data asynchronously with loading states
\`\`\`

### Specifying Selectors

Guide the AI toward specific selector strategies:

\`\`\`text
Test navigation menu using semantic selectors:
- Use role-based selectors for accessibility
- Prefer data-testid for custom components
- Use text content for buttons and links
- Verify ARIA labels and states
\`\`\`

### Edge Cases and Error Scenarios

Include error conditions in your prompts:

\`\`\`text
Test file upload with validation:
- Success: Upload valid PDF under 5MB
- Error: Reject files over size limit with clear message
- Error: Reject invalid file types with guidance
- Loading: Show progress indicator during upload
- Retry: Allow retry on network failures
\`\`\`

## Customizing AI Generation

### Custom System Prompts

Tailor the AI's behavior with custom prompts:

\`\`\`javascript
// arten.config.js
module.exports = {
  ai: {
    prompts: {
      system: \`You are an expert QA engineer for a Next.js application.
                
                Guidelines:
                - Always use data-testid selectors when possible
                - Include loading state assertions for async operations
                - Add accessibility checks where relevant
                - Use descriptive variable names and comments
                - Follow our team's naming conventions\`,
    }
  }
}
\`\`\`

### Template Patterns

Define reusable test patterns:

\`\`\`javascript
// arten.config.js
module.exports = {
  ai: {
    templates: {
      form: \`
        test.describe('{{formName}} Form', () => {
          test.beforeEach(async ({ page }) => {
            await page.goto('{{formUrl}}')
          })
          
          test('should submit with valid data', async ({ page }) => {
            // Generated test content here
          })
          
          test('should validate required fields', async ({ page }) => {
            // Generated validation tests here
          })
        })
      \`
    }
  }
}
\`\`\`

## AI-Assisted Test Refactoring

### Improving Existing Tests

Ask the AI to enhance existing tests:

\`\`\`text
Refactor this test to use Page Object Model pattern and add error handling:

[paste existing test code]
\`\`\`

### Adding Accessibility Tests

Generate accessibility-focused tests:

\`\`\`text
Add accessibility tests for the login form:
- Keyboard navigation
- Screen reader compatibility
- Focus management
- ARIA labels and roles
- Color contrast requirements
\`\`\`

### Performance Testing

Create performance-aware tests:

\`\`\`text
Generate performance tests for the dashboard:
- Measure page load times
- Check for excessive network requests
- Verify smooth animations and transitions
- Test with slow network conditions
\`\`\`

## Best Practices

### Prompt Writing

1. **Be Specific**: Include exact UI elements and expected behaviors
2. **Provide Context**: Mention your framework, UI library, and patterns
3. **Include Edge Cases**: Don't forget error conditions and edge scenarios
4. **Specify Assertions**: Describe what should be verified at each step

### Generated Test Review

Always review AI-generated tests for:

1. **Selector Reliability**: Ensure selectors are stable and maintainable
2. **Assertion Completeness**: Verify all important states are checked
3. **Error Handling**: Add proper error scenarios if missing
4. **Performance**: Remove unnecessary waits or optimize selectors

### Iterative Improvement

Use AI generation iteratively:

1. **Start Simple**: Generate basic happy path tests first
2. **Add Details**: Enhance with specific edge cases and validations
3. **Refactor**: Ask AI to improve structure and maintainability
4. **Optimize**: Request performance and reliability improvements

## Troubleshooting AI Generation

### Common Issues

**Inconsistent Selectors**
- Solution: Provide explicit selector guidance in prompts
- Example: "Use data-testid attributes for all interactive elements"

**Missing Assertions**
- Solution: Be specific about what needs verification
- Example: "Verify success message, URL change, and data persistence"

**Over-complex Tests**
- Solution: Break down into smaller, focused test scenarios
- Example: Split checkout flow into separate tests for each step

**Framework Mismatches**
- Solution: Specify your exact tech stack and patterns
- Example: "Using Next.js with React Testing Library patterns"

### Improving Results

1. **Provide Examples**: Include sample tests from your codebase
2. **Specify Patterns**: Describe your team's testing conventions
3. **Iterate Quickly**: Generate, review, and refine in short cycles
4. **Learn from Output**: Use good generated tests as examples for future prompts

## Integration with Development Workflow

### Pre-commit Generation

Generate tests before committing new features:

\`\`\`bash
arten generate "Test new user dashboard widgets" --auto-save
git add tests/
git commit -m "Add tests for dashboard widgets"
\`\`\`

### CI/CD Integration

Include AI-generated test validation in your pipeline:

\`\`\`yaml
# .github/workflows/test.yml
- name: Generate missing tests
  run: arten generate --missing-coverage
  
- name: Run all tests
  run: npm test
\`\`\`

### Code Review Process

1. **Generate Tests Early**: Create tests during feature development
2. **Review with Code**: Include test review in code review process
3. **Iterate Based on Feedback**: Refine prompts based on team feedback
4. **Document Patterns**: Build a library of effective prompt patterns

## Next Steps

Now that you understand AI test generation:

- **[Browser Testing](/guides/browser-testing)** - Multi-browser test execution
- **[CI/CD Integration](/guides/cicd)** - Automated testing in pipelines
- **[Examples](/examples)** - Real-world AI-generated test examples
- **[Configuration](/getting-started/configuration)** - Customize AI settings

---

**Ready to explore more?** Check out [Browser Testing](/guides/browser-testing) for multi-browser execution.
`

export default async function AITestGenerationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 