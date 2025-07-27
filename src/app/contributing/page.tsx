import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Contributing to Arten

We welcome contributions to Arten! This guide will help you get started with contributing to the project.

## 🤝 How to Contribute

There are many ways to contribute to Arten:

- **Report bugs** - Help us identify and fix issues
- **Request features** - Suggest new functionality
- **Improve documentation** - Help make our docs better
- **Submit code** - Fix bugs or implement new features
- **Share examples** - Contribute test examples and patterns

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - For development
- **Git** - For version control
- **GitHub account** - For submitting contributions

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   \`\`\`bash
   git clone https://github.com/your-username/arten.git
   cd arten
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

4. **Set up environment**:
   \`\`\`bash
   cp .env.example .env.local
   # Add your OpenRouter API key
   echo "OPENROUTER_API_KEY=your_key_here" >> .env.local
   \`\`\`

5. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

### Project Structure

\`\`\`
arten/
├── src/                     # Main application source
│   ├── app/                 # Next.js app router
│   ├── components/          # React components
│   ├── core/               # Core functionality
│   ├── store/              # State management
│   └── types/              # TypeScript definitions
├── cli/                    # CLI tool source
├── examples/               # Example tests and configurations
├── docs/                   # Documentation source
└── tests/                  # Test suites
\`\`\`

## 📝 Development Guidelines

### Code Style

We use ESLint and Prettier for code formatting:

\`\`\`bash
# Check linting
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code
npm run format
\`\`\`

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid \`any\` types when possible
- Export types from appropriate modules

### React Components

- Use functional components with hooks
- Follow the component structure:
  \`\`\`typescript
  // imports
  import React from 'react'
  
  // types
  interface ComponentProps {
    title: string
  }
  
  // component
  export function Component({ title }: ComponentProps) {
    return <div>{title}</div>
  }
  \`\`\`

### State Management

- Use Zustand stores for global state
- Keep stores focused and single-purpose
- Use proper TypeScript typing for stores

## 🐛 Reporting Bugs

### Before Reporting

1. **Search existing issues** to avoid duplicates
2. **Test with latest version** to ensure bug still exists
3. **Gather information** about your environment

### Bug Report Template

\`\`\`markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., macOS 14.0]
- Node.js: [e.g., 18.17.0]
- Arten version: [e.g., 0.1.0]
- Browser: [e.g., Chrome 120]

## Additional Context
Screenshots, logs, or other relevant information
\`\`\`

## 💡 Feature Requests

### Feature Request Template

\`\`\`markdown
## Feature Description
Clear description of the feature

## Use Case
Why is this feature needed?

## Proposed Solution
How should this feature work?

## Alternatives Considered
Other approaches you've considered

## Additional Context
Mockups, examples, or references
\`\`\`

## 🔧 Code Contributions

### Development Workflow

1. **Create a branch** for your feature:
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`

2. **Make your changes** following our guidelines

3. **Test your changes**:
   \`\`\`bash
   npm test
   npm run build
   \`\`\`

4. **Commit your changes**:
   \`\`\`bash
   git commit -m "feat: add amazing feature"
   \`\`\`

5. **Push to your fork**:
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`

6. **Create a Pull Request** on GitHub

### Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`
type(scope): description

[optional body]

[optional footer]
\`\`\`

**Types:**
- \`feat\` - New feature
- \`fix\` - Bug fix
- \`docs\` - Documentation changes
- \`style\` - Code style changes
- \`refactor\` - Code refactoring
- \`test\` - Test changes
- \`chore\` - Build/tool changes

**Examples:**
\`\`\`bash
feat(ai): add Claude 3.5 Sonnet support
fix(browser): resolve navigation timeout issue
docs(readme): update installation instructions
\`\`\`

### Pull Request Guidelines

#### PR Template

\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Other: ___________

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or properly documented)
\`\`\`

#### Review Process

1. **Automated checks** must pass (CI, linting, tests)
2. **Code review** by maintainers
3. **Feedback addressed** if requested
4. **Approval** and merge by maintainers

## 🧪 Testing

### Running Tests

\`\`\`bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Run tests in watch mode
npm run test:watch
\`\`\`

### Writing Tests

#### Unit Tests

\`\`\`typescript
// __tests__/component.test.tsx
import { render, screen } from '@testing-library/react'
import { Component } from '../Component'

describe('Component', () => {
  it('should render title', () => {
    render(<Component title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
\`\`\`

#### Integration Tests

\`\`\`typescript
// __tests__/api.test.ts
import { testApiRoute } from '@/tests/utils'

describe('/api/browser', () => {
  it('should return browser status', async () => {
    const response = await testApiRoute('/api/browser')
    expect(response.status).toBe(200)
  })
})
\`\`\`

## 📚 Documentation

### Documentation Guidelines

- Write clear, concise explanations
- Include code examples
- Add screenshots for UI features
- Test all examples before submitting

### Documentation Structure

\`\`\`
docs/
├── getting-started/        # Getting started guides
├── guides/                 # Feature guides
├── api/                   # API documentation
└── examples/              # Example code and tutorials
\`\`\`

### Updating Documentation

Documentation is built with MDX and Next.js:

\`\`\`bash
# Start documentation server
cd docs
npm run dev

# Build documentation
npm run build
\`\`\`

## 🌐 Internationalization

We welcome translations! To add a new language:

1. **Create language directory**: \`src/locales/[lang]/\`
2. **Translate strings**: Copy from \`src/locales/en/\`
3. **Add language config**: Update \`next.config.js\`
4. **Test translations**: Verify all strings display correctly

## 🔒 Security

### Reporting Security Issues

**DO NOT** create public issues for security vulnerabilities.

Instead, email us at: security@arten.dev

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We'll respond within 48 hours.

### Security Guidelines

- Never commit API keys or secrets
- Use environment variables for configuration
- Validate all user inputs
- Follow OWASP security practices

## 🏆 Recognition

### Contributors

All contributors are recognized in:
- \`CONTRIBUTORS.md\` file
- GitHub contributors page
- Release notes (for significant contributions)

### Maintainer Program

Regular contributors may be invited to become maintainers with:
- Commit access to repository
- Issue triage permissions
- Release management responsibilities

## 🤔 Questions?

### Getting Help

- **GitHub Discussions** - For general questions
- **Discord** - Real-time chat with community
- **Email** - Direct contact for sensitive topics

### Development Questions

- Architecture decisions
- Implementation details
- Performance considerations
- Best practices

We're here to help! Don't hesitate to ask questions.

## 📄 License

By contributing to Arten, you agree that your contributions will be licensed under the MIT License.

See [LICENSE](https://github.com/your-username/arten/blob/main/LICENSE) for details.

---

**Thank you for contributing to Arten!** 🎉

Your contributions help make testing better for everyone.
`

export default async function ContributingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 