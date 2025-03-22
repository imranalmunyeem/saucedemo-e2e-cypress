# 📜 Cypress Scripts Reference

## 🔹 Basic Test Commands

| Script              | Description                                        |
|---------------------|----------------------------------------------------|
| `npm test`          | Run all tests in default (Electron headless) mode |
| `npm run test:gui`  | Open Cypress GUI for manual test selection         |

---

## 🔹 Browser-Specific Test Runs (All Specs)

### ✅ Chrome

| Script                        | Description                            |
|-------------------------------|----------------------------------------|
| `npm run test:chrome:headless` | Run all tests in Chrome (headless)     |
| `npm run test:chrome:headed`   | Run all tests in Chrome (headed)       |

### ✅ Firefox

| Script                          | Description                              |
|----------------------------------|------------------------------------------|
| `npm run test:firefox:headless` | Run all tests in Firefox (headless)      |
| `npm run test:firefox:headed`   | Run all tests in Firefox (headed)        |

### ✅ Edge

| Script                       | Description                           |
|------------------------------|---------------------------------------|
| `npm run test:edge:headless` | Run all tests in Edge (headless)      |
| `npm run test:edge:headed`   | Run all tests in Edge (headed)        |

---

## 🔹 Environment-Specific Tests

| Script             | Description                                |
|--------------------|--------------------------------------------|
| `npm run test:dev`  | Run tests in `dev` environment             |
| `npm run test:prod` | Run tests in `prod` environment            |

---

## 🔹 Report Generation

| Script                    | Description                                               |
|---------------------------|-----------------------------------------------------------|
| `npm run test:report`     | Run tests with Mochawesome reporter                       |
| `npm run merge:report`    | Merge and generate final HTML report                      |
| `npm run test:full-report`| Run with reporter and generate final report               |
| `npm run clean:reports`   | Clean previous reports, screenshots, and videos           |
| `npm run ci:test`         | Clean + run full-report (useful for CI/CD pipelines)      |

---

## 🔹 Integration Tests

| Script                                    | Description                         |
|-------------------------------------------|-------------------------------------|
| `npm run integration:electron:headless`   | Electron browser in headless mode   |
| `npm run integration:electron:headed`     | Electron browser in headed mode     |
| `npm run integration:chrome:headless`     | Chrome browser in headless mode     |
| `npm run integration:chrome:headed`       | Chrome browser in headed mode       |
| `npm run integration:firefox:headless`    | Firefox browser in headless mode    |
| `npm run integration:firefox:headed`      | Firefox browser in headed mode      |
| `npm run integration:edge:headless`       | Edge browser in headless mode       |
| `npm run integration:edge:headed`         | Edge browser in headed mode         |

---

## 🔹 Security Tests

| Script                                  | Description                         |
|------------------------------------------|-------------------------------------|
| `npm run security:electron:headless`     | Electron browser in headless mode   |
| `npm run security:electron:headed`       | Electron browser in headed mode     |
| `npm run security:chrome:headless`       | Chrome browser in headless mode     |
| `npm run security:chrome:headed`         | Chrome browser in headed mode       |
| `npm run security:firefox:headless`      | Firefox browser in headless mode    |
| `npm run security:firefox:headed`        | Firefox browser in headed mode      |
| `npm run security:edge:headless`         | Edge browser in headless mode       |
| `npm run security:edge:headed`           | Edge browser in headed mode         |

---

## 🔹 Performance Tests

| Script                                      | Description                         |
|---------------------------------------------|-------------------------------------|
| `npm run performance:electron:headless`     | Electron browser in headless mode   |
| `npm run performance:electron:headed`       | Electron browser in headed mode     |
| `npm run performance:chrome:headless`       | Chrome browser in headless mode     |
| `npm run performance:chrome:headed`         | Chrome browser in headed mode       |
| `npm run performance:firefox:headless`      | Firefox browser in headless mode    |
| `npm run performance:firefox:headed`        | Firefox browser in headed mode      |
| `npm run performance:edge:headless`         | Edge browser in headless mode       |
| `npm run performance:edge:headed`           | Edge browser in headed mode         |

---

## 🔹 Responsive Tests

| Script                                     | Description                         |
|--------------------------------------------|-------------------------------------|
| `npm run responsive:electron:headless`     | Electron browser in headless mode   |
| `npm run responsive:electron:headed`       | Electron browser in headed mode     |
| `npm run responsive:chrome:headless`       | Chrome browser in headless mode     |
| `npm run responsive:chrome:headed`         | Chrome browser in headed mode       |
| `npm run responsive:firefox:headless`      | Firefox browser in headless mode    |
| `npm run responsive:firefox:headed`        | Firefox browser in headed mode      |
| `npm run responsive:edge:headless`         | Edge browser in headless mode       |
| `npm run responsive:edge:headed`           | Edge browser in headed mode         |
