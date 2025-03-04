# 💻 SAUCEDEMO-E2E-CYPRESS

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Mochawesome Reports](https://img.shields.io/badge/Mochawesome%20Reports-<COLOR>?style=for-the-badge&logo=mochawesome&logoColor=white)](https://www.npmjs.com/package/cypress-mochawesome-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents
- [Introduction](#introduction)
- [Features](features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)

## 📖 Introduction
This repository contains a Test Automation Framework, built using Cypress and Javascript for automated testing for this site: https://www.saucedemo.com/

## 🚀 Key Features
This Cypress project is designed for robust end-to-end testing, incorporating best practices and advanced features to enhance test automation efficiency.
- ✅ Page Object Model (POM) – Organized test structure using reusable page classes to improve maintainability.
- ✅ Data-Driven Testing – Uses external test data for login credentials and other scenarios, ensuring flexibility and scalability.
- ✅ Custom Commands – Encapsulates frequently used actions like login to reduce redundancy and improve readability.
- ✅ Advanced Module Integrations:
   - XPath Support – Enables selecting elements using XPath.
   - Cross-Environment Configuration – Allows testing across multiple environments (e.g., production & development) by dynamically setting the base URL.
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
|          |-- cypress-tests.yml
|-- cypress
|     |-- e2e
|          |-- SauceDemo
|                |-- login.cy.js
|                |-- product.cy.js
|     |-- fixtures
|           |-- request-body
|                |-- login_credentials.json
|     |-- reports
|     |-- support
|          |-- pages
|                |-- LoginPage.js
|                |-- ProductPage.js
|          |-- commands.js
|          |-- e2e.js
|-- .gitignore
|-- cypress.config.js
|-- package.json
|          |-- Contains Custom Scripts
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

This project is configured for CI using Github Actions. Check the configurations in `.github/workflows/*.yml`.

## 📊 Reporting

Mochawesome report (Logs are attached) is stored in the `cypress/reports` directory.
