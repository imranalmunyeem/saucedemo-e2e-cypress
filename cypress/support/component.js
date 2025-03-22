import { mount } from 'cypress/react'; // Cypress's official React mount util

// Add cy.mount to global Cypress commands
Cypress.Commands.add('mount', mount);

export { mount };
