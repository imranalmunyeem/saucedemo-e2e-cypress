# 💻 SAUCEDEMO-E2E-CYPRESS

## 📑 Table of Contents
- [Introduction](#introduction)
- [Tools & Libraries Used](#tools--libraries-used)
- [Features](features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#-continuous-integration)
- [Reporting](#reporting)

## 📖 Introduction
This repository contains a Test Automation Framework, built using Cypress and Javascript for automated testing for this site: https://www.saucedemo.com/

## 🛠Tools & Libraries Used
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Mochawesome Reports](https://img.shields.io/badge/Mochawesome%20Reports-<COLOR>?style=for-the-badge&logo=mochawesome&logoColor=white)](https://www.npmjs.com/package/cypress-mochawesome-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

| 📦 Library / Tool             | 🔍 Purpose                                                                 |
|------------------------------|----------------------------------------------------------------------------|
| 🌐 cypress                   | Core E2E testing framework for web applications.                          |
| 🧪 cypress-mochawesome-reporter | Generates detailed test reports in HTML/JSON formats.                   |
| 🗂️ mochawesome-merge          | Merges multiple Mochawesome JSON reports into a single file.              |
| 📄 cypress.config.js          | Custom test configuration with dynamic environment URLs and setup.        |
| 📝 e2e.js (support file)      | Global hooks, reporter registration, and command imports.                 |
| 📝 cypress.on (event listener)| To listen to the status of the test case whether passed or failed         |
| 🧾 cypress.urls.json          | Stores environment-specific base URLs (`prod`, `dev`, etc.).              |
| 🐞 xlsx                      | Exports failed test details as `.xls` bug reports.                        |
| 📁 cross-env                 | Passes `ENV=prod/dev` for environment-specific test runs.                 |
| 🔍 cypress-xpath              | Enables use of XPath selectors in tests.                                  |
| 🏷️ @cypress/grep             | Filters/group tests using tags or regex patterns.                         |
| 📺 GitHub Actions             | Automates Cypress test runs with CI/CD pipelines.                         |
| 📤 actions/upload-artifact    | Uploads reports, screenshots, videos to GitHub as artifacts.              |
| 🛠️ actions/setup-node, checkout | Sets up Node.js and fetches repository code.                            |
| 🌐 browserstack-cypress-cli   | (Optional) Runs Cypress tests on BrowserStack cloud browsers.             |
| 📊 csv                       | Used for generating structured bug reports in `.csv` format.              |
| 📬 Slack/Email integration    | (Optional) Sends real-time test results to team communication channels.   |


<br>

## 🚀 Key Features
This Cypress project is designed for robust end-to-end testing, incorporating best practices and advanced features to enhance test automation efficiency.
- ✅ Page Object Model (POM) – Organized test structure using reusable page classes to improve maintainability.
- ✅ Data-Driven Testing – Uses external test data for login credentials and other scenarios, ensuring flexibility and scalability.
- ✅ Custom Commands – Added custom log messages to indicate pass or fail status, login, logout
- ✅ Advanced Module Integrations:
   - XPath Support – Enables selecting elements using XPath.
   - Cross-Environment Configuration – Allows testing across multiple environments (e.g., production & development) by dynamically setting the base URL.
   - Integrated browserstack
   - Used faker.js to load random data dynamically
   - Screenshots & Videos – Automatically captures test evidence for debugging and reporting.
   - Retries on Failures – Configured retries to improve test stability.
   - Test Grouping with Grep – Supports running specific test groups using Cypress grep.
- ✅ Custom Scripts – Optimized package.json scripts for running tests across different browsers, environments, and headless modes.
- ✅ Mochawesome Reporting – Generates detailed, interactive HTML reports with screenshots and logs for better test analysis.
- ✅ CI/CD Integration with GitHub Actions:
   - Runs tests automatically on every push & pull request.
   - Scheduled execution Monday to Friday at noon (UTC).
   - Supports manual test execution triggers via GitHub Actions workflow.

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/imranalmunyeem/saucedemo-e2e-cypress.git
   ```

2. Navigate to the project directory:

   ```bash
   cd saucedemo-e2e-cypress
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Running Tests

  ```bash
  npm test
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- cypress-tests.yml                # GitHub Actions CI/CD workflow
|-- cypress
|     |-- component
|          |-- LoginForm.spec.jsx
|     |-- e2e
|          |-- performance
|                |-- performanceTest.spec.js    
|          |-- responsiveness
|                |-- responsivenessTest.spec.js              
|          |-- integration
|                |-- login.spec.js              # Login test cases
|                |-- product.spec.js            # Product page test cases
|          |-- Security
|                |-- securityTest.spec.js    
|     |-- fixtures
|           |-- request-body
|                |-- login_credentials.json     # Test data
|     |-- reports                               # Stores test execution reports
|     |-- support
|          |-- pages
|                |-- LoginPage.js               # Page Object Model for Login page
|                |-- ProductPage.js             # Page Object Model for Product page
|          |-- commands.js                      # Custom Cypress commands
|          |-- e2e.js                           # Global test configurations
|-- .gitignore
|-- cypress.config.js                           # Cypress configuration settings
|-- package.json                                # Project dependencies and custom scripts
```

- `cypress/e2e`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `cypress/fixtures`: Contains external files (example: user create/update data) that can be used to mock data during tests.
- `cypress/reports`: Contains the report for tests (Logs are attached).
- `cypress/support`: Contains custom commands and global configuration.
- `cypress/support/utils`: Contains the Utilities that provides methods for asserting different conditions on web elements, handling requests and responses.

## ⚙️ Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.

## 🔄 Continuous Integration

##### This project uses GitHub Actions to run **Cypress E2E test suites** in parallel for:
| 🧪 Test Type         | 🔍 Purpose & Scope                                                           |
|----------------------|-----------------------------------------------------------------------------|
| 🧪 Integration Tests | Validates functional flows and UI behavior (e.g., login, cart, checkout)    |
| 🛡️ Security Tests     | Checks for vulnerabilities like brute force, XSS, SQL injection, etc.       |
| 🚀 Performance Tests  | Verifies response time, speed under load, and performance regressions       |
| 📱 Responsive Tests   | Ensures layout and elements render correctly across multiple screen sizes   |


##### 🚀 Workflow Triggers

##### The test workflow is automatically triggered:

- ✅ **Daily (Monday to Friday)** at **12:00 UTC**
- ✅ **Manually** from the GitHub Actions tab via `workflow_dispatch`

⚙️ What Each Job Does
Each job (e.g. integration-tests) performs the following steps:

| 🛠️ Step                                | 🔍 Purpose                                                                 |
|----------------------------------------|----------------------------------------------------------------------------|
| 🧾 Checkout Code                        | Clones your GitHub repository using `actions/checkout`                    |
| 🧰 Setup Node.js                        | Installs Node.js v18 and caches `npm` dependencies for faster builds      |
| 📦 Install Dependencies                 | Uses `npm ci --legacy-peer-deps` to install exact dependencies            |
| 🌐 Set ENV Variable                     | Sets the `ENV=prod` variable to load environment-specific base URL        |
| 🧪 Run Cypress Tests                    | Executes tests from a specific folder (e.g., `integration`, `security`)   |
| 📄 Rename Mochawesome Report           | Renames dynamic report like `index.html_03252025_123456.html` to `index.html` |
| 📤 Upload Mochawesome HTML Report       | Publishes the report as an artifact for easy download from GitHub Actions |


##### You can find the workflow file here:
```bash
.github/workflows/*.yml
```

##### 🔔 Trigger Metadata
Each job logs metadata about the trigger in the GitHub summary, including:

| 🧩 Metadata Field     | 🔍 Description                                             |
|-----------------------|------------------------------------------------------------|
| 👤 Triggered By        | Shows the GitHub username who triggered the workflow       |
| 🕹️ Event Type          | Indicates whether the run was manual or scheduled (CRON)   |
| 🌿 Branch Name         | Displays the branch name from which the workflow was run   |
| 🆔 Run ID              | Unique GitHub Actions run identifier for tracking purposes |




## 📊 Reporting

Mochawesome report (Logs are attached) is stored in the `cypress/reports` directory.
