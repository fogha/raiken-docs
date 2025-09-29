import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# Installation

Get Raiken up and running in your project with these installation options. Raiken provides multiple deployment methods to fit your development workflow.

## Prerequisites

Before installing Raiken, ensure you have:

- **Node.js 16.x or later** - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for cloning repositories
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation Methods

### Option 1: CLI Installation (Recommended)

Install the Raiken CLI globally:

\`\`\`bash
# Install globally
npm install -g @raiken/cli

# Navigate to your project
cd your-project

# Initialize Raiken
raiken init

# Start Raiken
raiken start
\`\`\`

This will:
- Install the Raiken CLI globally
- Set up Playwright configuration and test directories  
- Start the Raiken web interface at \`http://localhost:3460\`
- Enable all testing and AI features
- Create project-specific configuration files

### Option 2: Standalone Web Application

For running Raiken as a standalone web application:

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/raiken.git
cd raiken

# Install dependencies
npm install

# Set up environment variables
echo "OPENROUTER_API_KEY=your_api_key_here" > .env.local

# Start development server
npm run dev
\`\`\`

### Option 3: NPX Usage

You can also use npx to run Raiken without global installation:

\`\`\`bash
# Navigate to your project
cd your-project

# Run without installation
npx @raiken/cli start

# Or initialize first
npx @raiken/cli init
npx @raiken/cli start
\`\`\`

## Environment Setup

### API Key Configuration

Raiken uses OpenRouter for AI-powered test generation. Get your API key:

1. **Sign up** at [OpenRouter](https://openrouter.ai/)
2. **Generate an API key** in your dashboard
3. **Configure the key**:

#### Global CLI Installation:
\`\`\`bash
# Set API key in environment variable
export OPENROUTER_API_KEY=your_api_key_here
\`\`\`

#### Local Installation:
Create a \`.env.local\` file in your project root:
\`\`\`bash
OPENROUTER_API_KEY=your_api_key_here
\`\`\`

### Project Configuration

Raiken automatically detects most project configurations, but you can customize settings:

\`\`\`bash
# Generate config file
raiken init

# Edit configuration file manually
nano raiken.config.js
\`\`\`

This creates an \`raiken.config.js\` file:

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

Raiken works seamlessly with Next.js applications:

\`\`\`bash
cd my-nextjs-app
raiken start

# Raiken will auto-detect:
# - Next.js configuration
# - Port (usually 3000)
# - Test directory structure
\`\`\`

### React Projects (Vite/CRA)

For React applications:

\`\`\`bash
cd my-react-app
raiken start --port 3000

# Specify custom development server
raiken start --dev-server "npm run dev"
\`\`\`

### Vue.js Projects

Vue.js support with auto-detection:

\`\`\`bash
cd my-vue-app
raiken start

# For Nuxt.js
raiken start --framework nuxt
\`\`\`

### Other Frameworks

Raiken supports most web frameworks:

\`\`\`bash
# Svelte/SvelteKit
cd my-svelte-app
raiken start --framework svelte

# Angular
cd my-angular-app
raiken start --framework angular --port 4200

# Custom setup
raiken start --framework custom --dev-server "npm run serve"
\`\`\`

## Verification

After installation, verify everything works:

1. **Check CLI installation**:
   \`\`\`bash
   raiken --version
   raiken --help
   \`\`\`

2. **Test project detection**:
   \`\`\`bash
   cd your-project
   raiken info
   \`\`\`

3. **Start Raiken**:
   \`\`\`bash
   raiken start
   \`\`\`

4. **Open the interface** at \`http://localhost:3460\`

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
raiken start --port 3001

# Kill process using default port
lsof -ti:3000 | xargs kill -9
\`\`\`

#### API Key Issues
\`\`\`bash
# Verify API key is set
echo $OPENROUTER_API_KEY

# Reset configuration by deleting config file
rm raiken.config.js
\`\`\`

#### Windows Installation
\`\`\`powershell
# Use PowerShell as Administrator
npm install -g @raiken/cli --force

# If you encounter issues, try:
npm cache clean --force
npm install -g @raiken/cli
\`\`\`

### Getting Help

If you encounter issues:

1. **Check the console output** when running raiken start

2. **Check project info**:
   \`\`\`bash
   raiken info
   \`\`\`

3. **Search existing issues**: [GitHub Issues](https://github.com/your-username/raiken/issues)

4. **Join the community**: [GitHub Discussions](https://github.com/your-username/raiken/discussions)

## Next Steps

Now that Raiken is installed:

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