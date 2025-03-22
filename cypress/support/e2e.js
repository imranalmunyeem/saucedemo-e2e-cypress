// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'
import 'cypress-xpath'

// Global variable to track test failure
let testFailed = false;

// Listen for any test failure
Cypress.on('fail', (error, runnable) => {
  testFailed = true; // Mark this test as failed
  throw error;       // Let Cypress still fail the test
});

// After each test, update Cypress.env so it can be read by custom commands
afterEach(() => {
  Cypress.env('testFailed', testFailed);
  testFailed = false; // Reset for next test
});
