import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Installation

Get Arten up and running in your project with these installation options.

## Prerequisites

Before installing Arten, ensure you have:

- **Node.js 16.x or later** - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for cloning repositories
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation Methods

### Option 1: Clone Repository (Current Method)

Currently, Arten is available as a source repository that you can clone and run:

\`\`\`bash
# Clone the repository
git clone https://github.com/fogha/arten.git
cd arten

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

This will:
- Install all required dependencies
- Start the Arten web interface at \`http://localhost:3000\`
- Enable all testing and AI features

### Option 2: Future CLI Installation

A CLI tool is planned for future releases:

\`\`\`bash
# Coming soon - global CLI installation
npm install -g @arten/cli

# Add to package.json scripts
echo '"arten": "arten start"' >> package.json

# Start Arten
npm run arten
\`\`\`

### Option 3: Standalone Development Setup

For contributing to Arten or running the latest development version:

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/arten.git
cd arten

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your OpenRouter API key
echo "OPENROUTER_API_KEY=your_api_key_here" >> .env.local

# Start development server
npm run dev
\`\`\`

## Environment Setup

### API Key Configuration

Arten uses OpenRouter for AI-powered test generation. Get your API key:

1. **Sign up** at [OpenRouter](https://openrouter.ai/)
2. **Generate an API key** in your dashboard
3. **Configure the key**:

#### Global CLI Installation:
\`\`\`bash
arten config set apiKey your_api_key_here
\`\`\`

#### Local Installation:
Create a \`.env.local\` file in your project root:
\`\`\`bash
OPENROUTER_API_KEY=your_api_key_here
\`\`\`

### Project Configuration

Arten automatically detects most project configurations, but you can customize settings:

\`\`\`bash
# Generate config file
arten init

# Edit configuration
arten config edit
\`\`\`

This creates an \`arten.config.js\` file:

\`\`\`javascript
module.exports = {
  // Test directory
  testDir: './tests',
  
  // Playwright configuration
  playwright: {
    use: {
      baseURL: 'http://localhost:3000',
      headless: false,
    },
  },
  
  // AI configuration
  ai: {
    model: 'gpt-4',
    temperature: 0.1,
  },
  
  // Bridge configuration
  bridge: {
    port: 3001,
    enabled: true,
  },
}
\`\`\`

## Framework Integration

### Next.js Projects

Arten works seamlessly with Next.js applications:

\`\`\`bash
cd my-nextjs-app
arten start

# Arten will auto-detect:
# - Next.js configuration
# - Port (usually 3000)
# - Test directory structure
\`\`\`

### React Projects (Vite/CRA)

For React applications:

\`\`\`bash
cd my-react-app
arten start --port 3000

# Specify custom development server
arten start --dev-server "npm run dev"
\`\`\`

### Vue.js Projects

Vue.js support with auto-detection:

\`\`\`bash
cd my-vue-app
arten start

# For Nuxt.js
arten start --framework nuxt
\`\`\`

### Other Frameworks

Arten supports most web frameworks:

\`\`\`bash
# Svelte/SvelteKit
cd my-svelte-app
arten start --framework svelte

# Angular
cd my-angular-app
arten start --framework angular --port 4200

# Custom setup
arten start --framework custom --dev-server "npm run serve"
\`\`\`

## Verification

After installation, verify everything works:

1. **Check CLI installation**:
   \`\`\`bash
   arten --version
   arten --help
   \`\`\`

2. **Test project detection**:
   \`\`\`bash
   cd your-project
   arten doctor
   \`\`\`

3. **Start Arten**:
   \`\`\`bash
   arten start
   \`\`\`

4. **Open the interface** at \`http://localhost:3000\`

5. **Create your first test** using the AI test generator

## Troubleshooting

### Common Issues

#### Permission Errors (macOS/Linux)
\`\`\`bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm

# Alternative: use nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
\`\`\`

#### Port Conflicts
\`\`\`bash
# Use different port
arten start --port 3001

# Kill process using default port
lsof -ti:3000 | xargs kill -9
\`\`\`

#### API Key Issues
\`\`\`bash
# Verify API key is set
arten config get apiKey

# Reset configuration
arten config reset
\`\`\`

#### Windows Installation
\`\`\`powershell
# Use PowerShell as Administrator
npm install -g @arten/cli --force

# If you encounter issues, try:
npm cache clean --force
npm install -g @arten/cli
\`\`\`

### Getting Help

If you encounter issues:

1. **Check the logs**:
   \`\`\`bash
   arten logs
   \`\`\`

2. **Run diagnostics**:
   \`\`\`bash
   arten doctor
   \`\`\`

3. **Search existing issues**: [GitHub Issues](https://github.com/your-username/arten/issues)

4. **Join the community**: [GitHub Discussions](https://github.com/your-username/arten/discussions)

## Next Steps

Now that Arten is installed:

- **[Configuration Guide](/getting-started/configuration)** - Customize your setup
- **[Quick Start](/getting-started/quick-start)** - Create your first test
- **[Writing Tests](/guides/writing-tests)** - Learn testing best practices
- **[Examples](/examples)** - See real-world test examples

---

**Ready to create your first test?** Continue to the [Quick Start Guide](/getting-started/quick-start).
`

export default async function InstallationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 