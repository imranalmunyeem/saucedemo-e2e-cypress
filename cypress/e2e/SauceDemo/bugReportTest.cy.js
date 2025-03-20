///<reference types = 'cypress'/>


describe('Bug Reporting Test', () => {
    it('TC_999: Manually log a bug', () => {
      cy.task('writeBugReport', {
        testCaseId: 'TC_999',
        issueDescription: 'Test bug reporting functionality',
        screenshotPath: 'screenshots/TC_999.png'
      });
    });
  });
  