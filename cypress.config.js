const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

// Load URLs from `cypress.urls.json`
function getUrlsConfig() {
  const urlsFilePath = path.join(__dirname, "cypress.urls.json");

  if (fs.existsSync(urlsFilePath)) {
    return require(urlsFilePath);
  }

  console.warn(`⚠️ URLs file not found: ${urlsFilePath}. Using default production URL.`);
  return { prod: { baseUrl: "https://www.saucedemo.com" } }; // Fallback
}

const urlsConfig = getUrlsConfig();
const environment = process.env.ENV || "prod"; // Default to 'prod' if ENV is not set
const baseUrl = urlsConfig[environment]?.baseUrl || "https://www.saucedemo.com"; // Fallback

module.exports = defineConfig({
  // Set the default viewport dimensions
  viewportHeight: 760,
  viewportWidth: 1100,

  // Set retries for failed test cases
  retries: 1,

  // Screenshot and video settings
  video: true,
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
    baseUrl, // Dynamically set baseUrl

    setupNodeEvents(on, config) {
      // Implement Mochawesome Reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      return config; // Always return the modified config
    },

    // Set the pattern to match the actual test files in SauceDemo folder
    specPattern: ['cypress/e2e/integration/*.spec.js','cypress/e2e/security/*.spec.js','cypress/e2e/performance/*.spec.js','cypress/e2e/responsive/*.spec.js'],
    excludeSpecPattern: ['cypress/e2e/examples/*.js', 'cypress/e2e/examples/*.ts'],

    // Optional: Set the default timeout for commands and assertions
    defaultCommandTimeout: 10000,
  },

});
