const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Define environment variables for prod and dev URLs
  env: {
    prod: {
      baseUrl: 'https://www.saucedemo.com', // Production URL
    },
    dev: {
      baseUrl: 'https://dev.saucedemo.com', // Development URL
    }
  },

  // Set the default viewport dimensions
  viewportHeight: 760,
  viewportWidth: 1100,

  // Set retries to 1 for failed test cases
  retries: 1,

  // Screenshot and video settings
  video: false,
  screenshotOnRunFailure: true,

  // Reporter configuration for Mochawesome
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: true,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
    charts: true,
    reportPageTitle: "SauceDemo Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    quiet: true
  },

  // Configure Cypress E2E tests
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // Dynamically set the baseUrl based on the ENV environment variable
      const environment = process.env.ENV || 'prod'; // Default to 'prod' if ENV is not set
      const baseUrl = config.env[environment].baseUrl;

      config.baseUrl = baseUrl; // Set the baseUrl dynamically

      // Implement any custom event listeners if necessary
      require('cypress-mochawesome-reporter/plugin')(on);    

      return config; // Always return the modified config
    },

    // Set the pattern to match the actual test files in SauceDemo folder
    specPattern: ['cypress/e2e/SauceDemo/*.cy.js'],
    excludeSpecPattern: ['cypress/e2e/examples/*.js', 'cypress/e2e/examples/*.ts'],

    // Optional: Set the default timeout for commands and assertions
    defaultCommandTimeout: 10000,
  },
});