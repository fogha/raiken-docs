import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/docs/mdx-components'

const content = `
# CI/CD Integration

Integrate Arten-generated tests into your continuous integration and deployment pipelines for automated testing and quality assurance.

## Overview

Arten generates standard Playwright tests that can be seamlessly integrated into any CI/CD pipeline. This guide covers setup for popular CI/CD platforms and best practices for automated testing.

## GitHub Actions

### Basic Workflow

Create \`.github/workflows/test.yml\`:

\`\`\`yaml
name: Arten Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    
    - name: Run Arten-generated tests
      run: npx playwright test
    
    - uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
\`\`\`

### Multi-Browser Testing

Test across multiple browsers in parallel:

\`\`\`yaml
name: Cross-Browser Tests

on: [push, pull_request]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        browser: [chromium, firefox, webkit]
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    
    - name: Run tests on \${{ matrix.browser }}
      run: npx playwright test --project=\${{ matrix.browser }}
    
    - name: Upload test results
      uses: actions/upload-artifact@v4
      if: always()
      with:
        name: test-results-\${{ matrix.browser }}
        path: test-results/
        retention-days: 30
\`\`\`

### Environment-Specific Testing

Test against different environments:

\`\`\`yaml
name: Environment Tests

on:
  push:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        environment: [staging, production]
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    
    - name: Run tests against \${{ matrix.environment }}
      run: npx playwright test
      env:
        BASE_URL: \${{ secrets[format('{0}_BASE_URL', matrix.environment)] }}
        API_TOKEN: \${{ secrets[format('{0}_API_TOKEN', matrix.environment)] }}
\`\`\`

## GitLab CI

### Basic Configuration

Create \`.gitlab-ci.yml\`:

\`\`\`yaml
stages:
  - test

variables:
  npm_config_cache: "$CI_PROJECT_DIR/.npm"

cache:
  paths:
    - .npm/
    - node_modules/

test:
  stage: test
  image: mcr.microsoft.com/playwright:v1.50.1-focal
  script:
    - npm ci
    - npx playwright test
  artifacts:
    when: always
    paths:
      - playwright-report/
      - test-results/
    expire_in: 1 week
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
\`\`\`

### Parallel Browser Testing

\`\`\`yaml
test:
  stage: test
  image: mcr.microsoft.com/playwright:v1.50.1-focal
  parallel:
    matrix:
      - BROWSER: chromium
      - BROWSER: firefox
      - BROWSER: webkit
  script:
    - npm ci
    - npx playwright test --project=$BROWSER
  artifacts:
    when: always
    paths:
      - test-results/
    reports:
      junit: test-results/junit.xml
\`\`\`

## Jenkins

### Pipeline Configuration

Create \`Jenkinsfile\`:

\`\`\`groovy
pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.1-focal'
            args '--ipc=host --user root'
        }
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Run Tests') {
            parallel {
                stage('Chromium') {
                    steps {
                        sh 'npx playwright test --project=chromium'
                    }
                }
                stage('Firefox') {
                    steps {
                        sh 'npx playwright test --project=firefox'
                    }
                }
                stage('WebKit') {
                    steps {
                        sh 'npx playwright test --project=webkit'
                    }
                }
            }
        }
    }
    
    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
            
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
        }
    }
}
\`\`\`

## Azure DevOps

### Pipeline YAML

Create \`azure-pipelines.yml\`:

\`\`\`yaml
trigger:
  branches:
    include:
      - main
      - develop

pool:
  vmImage: 'ubuntu-latest'

variables:
  node_version: '18'

stages:
- stage: Test
  jobs:
  - job: PlaywrightTests
    strategy:
      matrix:
        chromium:
          browserName: 'chromium'
        firefox:
          browserName: 'firefox'
        webkit:
          browserName: 'webkit'
    
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '\$(node_version)'
      displayName: 'Install Node.js'
    
    - script: npm ci
      displayName: 'Install dependencies'
    
    - script: npx playwright install --with-deps
      displayName: 'Install Playwright browsers'
    
    - script: npx playwright test --project=\$(browserName)
      displayName: 'Run tests on \$(browserName)'
    
    - task: PublishTestResults@2
      condition: always()
      inputs:
        testResultsFormat: 'JUnit'
        testResultsFiles: 'test-results/junit.xml'
        testRunTitle: 'Playwright Tests - \$(browserName)'
    
    - task: PublishPipelineArtifact@1
      condition: always()
      inputs:
        targetPath: 'playwright-report'
        artifactName: 'playwright-report-\$(browserName)'
\`\`\`

## CircleCI

### Configuration

Create \`.circleci/config.yml\`:

\`\`\`yaml
version: 2.1

orbs:
  node: circleci/node@5.0

jobs:
  test:
    docker:
      - image: mcr.microsoft.com/playwright:v1.50.1-focal
    
    parallelism: 3
    
    steps:
      - checkout
      
      - node/install-packages:
          pkg-manager: npm
      
      - run:
          name: Run Playwright tests
          command: |
            npx playwright test --shard=\$((CIRCLE_NODE_INDEX + 1))/\$CIRCLE_NODE_TOTAL
      
      - store_artifacts:
          path: playwright-report
          destination: playwright-report
      
      - store_test_results:
          path: test-results

workflows:
  test:
    jobs:
      - test
\`\`\`

## Docker Integration

### Dockerfile for Testing

Create a Docker image for consistent testing:

\`\`\`dockerfile
FROM mcr.microsoft.com/playwright:v1.50.1-focal

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Set environment variables
ENV CI=true
ENV NODE_ENV=test

# Run tests
CMD ["npx", "playwright", "test"]
\`\`\`

### Docker Compose for Local CI

Create \`docker-compose.test.yml\`:

\`\`\`yaml
version: '3.8'

services:
  test:
    build: .
    volumes:
      - ./test-results:/app/test-results
      - ./playwright-report:/app/playwright-report
    environment:
      - BASE_URL=http://app:3000
    depends_on:
      - app
  
  app:
    build: .
    command: npm start
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
\`\`\`

## Configuration Management

### Environment Variables

Set up environment-specific configurations:

\`\`\`bash
# .env.ci
BASE_URL=https://staging.example.com
HEADLESS=true
WORKERS=2
RETRIES=2
TIMEOUT=30000

# .env.production
BASE_URL=https://app.example.com
HEADLESS=true
WORKERS=1
RETRIES=3
TIMEOUT=60000
\`\`\`

### Playwright Configuration for CI

Update \`playwright.config.ts\` for CI environments:

\`\`\`typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  
  // CI-specific settings
  workers: process.env.CI ? 2 : undefined,
  retries: process.env.CI ? 2 : 0,
  
  // Reporter configuration
  reporter: process.env.CI ? [
    ['html'],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['github']
  ] : 'html',
  
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: process.env.CI ? true : false,
    
    // Artifacts for CI
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  
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
  ],
  
  // CI-specific web server configuration
  webServer: process.env.CI ? undefined : {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
})
\`\`\`

## Test Sharding

### Parallel Test Execution

Split tests across multiple machines:

\`\`\`yaml
# GitHub Actions with sharding
strategy:
  matrix:
    shard: [1/4, 2/4, 3/4, 4/4]

steps:
  - name: Run tests
    run: npx playwright test --shard=\${{ matrix.shard }}
\`\`\`

### Custom Test Distribution

\`\`\`typescript
// playwright.config.ts
export default defineConfig({
  projects: [
    {
      name: 'critical-tests',
      testMatch: /.*critical.spec.ts/,
      retries: 3,
    },
    {
      name: 'regression-tests',  
      testMatch: /.*regression.spec.ts/,
      retries: 1,
    },
  ],
})
\`\`\`

## Monitoring and Notifications

### Slack Integration

Set up Slack notifications for test results:

\`\`\`yaml
# GitHub Actions
- name: Notify Slack on failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    channel: '#testing'
    webhook_url: \${{ secrets.SLACK_WEBHOOK }}
    message: |
      🚨 Arten tests failed in \${{ github.repository }}
      Branch: \${{ github.ref }}
      Commit: \${{ github.sha }}
      View results: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
\`\`\`

### Test Analytics

Track test performance over time:

\`\`\`typescript
// analytics.js
const fs = require('fs')
const path = require('path')

// Parse test results
const resultsFile = path.join('test-results', 'results.json')
const results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'))

// Calculate metrics
const metrics = {
  totalTests: results.stats.total,
  passedTests: results.stats.passed,
  failedTests: results.stats.failed,
  duration: results.stats.duration,
  timestamp: new Date().toISOString(),
}

// Send to analytics service
console.log('Test Metrics:', JSON.stringify(metrics))
\`\`\`

## Best Practices

### Test Organization

1. **Separate Test Types**: Critical, regression, smoke tests
2. **Parallel Execution**: Use sharding for faster feedback
3. **Selective Testing**: Run relevant tests based on changes
4. **Flaky Test Handling**: Automatic retries and quarantine

### Performance Optimization

1. **Browser Reuse**: Configure persistent browser contexts
2. **Test Parallelization**: Optimize worker count for CI resources
3. **Artifact Management**: Clean up old test artifacts
4. **Resource Monitoring**: Track CI resource usage

### Debugging CI Failures

1. **Comprehensive Logging**: Enable debug logs in CI
2. **Artifact Collection**: Screenshots, videos, traces
3. **Environment Reproduction**: Match CI environment locally
4. **Gradual Rollout**: Test changes in staging first

## Troubleshooting

### Common CI Issues

**Browser Installation Failures**
\`\`\`bash
# Ensure browsers are installed with dependencies
npx playwright install --with-deps
\`\`\`

**Timeout Issues**
\`\`\`typescript
// Increase timeouts for CI
use: {
  actionTimeout: 60000,
  navigationTimeout: 60000,
}
\`\`\`

**Resource Constraints**
\`\`\`yaml
# Reduce parallel workers
- name: Run tests
  run: npx playwright test --workers=1
\`\`\`

**Display Issues (Linux)**
\`\`\`bash
# Use headless mode
npx playwright test --headed=false
\`\`\`

## Next Steps

With CI/CD integration complete:

- **[Examples](/examples)** - See complete CI/CD configurations
- **[Monitoring](#monitoring-and-notifications)** - Set up alerts and dashboards
- **[Performance Optimization](#performance-optimization)** - Fine-tune your pipeline

---

**Ready to scale?** Your Arten tests are now running automatically in your CI/CD pipeline, providing continuous quality assurance for your application.
`

export default async function CICDPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 