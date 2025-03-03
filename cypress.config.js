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

  // Video settings
  video: true,
  videoCompression: true,

  // Reporter configuration for Mochawesome
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/saucedemo-ui-tests-report", // Custom report directory
    overwrite: false, // Prevent overwriting previous reports
    html: true, // Generate HTML report
    json: true, // Generate JSON report
    charts: true, // Enable charts in the report
    embeddedScreenshots: true,
    inclineAssets: true,
    autoOpen: false,
    code: true,
    showPassed: true,
    saveAllAttempts: false,
    reportPageTitle: "SauceDemo Test Report", // Custom title
    reportFilename: "saucedemo-report", // Custom report file name
    timestamp: "longDate" // Append timestamp to avoid overwrites
  },

  // Configure Cypress E2E tests
  e2e: {
    setupNodeEvents(on, config) {
      // Dynamically set the baseUrl based on the ENV environment variable
      const environment = process.env.ENV || 'prod'; // Default to 'prod' if ENV is not set
      const baseUrl = config.env[environment].baseUrl;

      config.baseUrl = baseUrl; // Set the baseUrl dynamically

      // Implement any custom event listeners if necessary
      require('cypress-mochawesome-reporter/plugin')(on);    

      return config; // Always return the modified config
    },

    // Optional: Set the default timeout for commands and assertions
    defaultCommandTimeout: 10000,
  },
});
