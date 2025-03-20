const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

module.exports = {
  writeBugReport({ testCaseId, issueDescription, screenshotPath }) {
    console.log("📌 Writing bug report..."); 

    // file path 
    const filePath = path.join(__dirname, '..', '..', 'cypress', 'bug_reports', 'bug_reports.xlsx');

    let workbook;
    let sheetName = 'Bug Reports';

    // Check if file exists, otherwise create a new workbook with a default sheet
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
    } else {
      console.log("⚠️ Bug report file not found, creating a new one...");
      workbook = XLSX.utils.book_new();
      workbook.Sheets[sheetName] = XLSX.utils.aoa_to_sheet([
        ['Test Case ID', 'Issue Description', 'Screenshot Path'] // Headers
      ]);
      XLSX.utils.book_append_sheet(workbook, workbook.Sheets[sheetName], sheetName);
    }

    let worksheet = workbook.Sheets[sheetName];

    // Convert worksheet to JSON to append a new row
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    existingData.push([testCaseId, issueDescription, screenshotPath]);

    // Update worksheet and save
    workbook.Sheets[sheetName] = XLSX.utils.aoa_to_sheet(existingData);
    XLSX.writeFile(workbook, filePath);

    console.log(`✅ Bug report saved: ${filePath}`);
    return null;
  }
};
