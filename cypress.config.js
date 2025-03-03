const { defineConfig } = require("cypress");

module.exports = defineConfig({

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

  // For video capturing
  video: true,
  videoCompression: true,

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

  e2e: {
    setupNodeEvents(on, config) {
          // Define environment-specific settings here
    baseUrl: 'https://www.saucedemo.com', // Default to production URL
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);    
    },
  },
});
