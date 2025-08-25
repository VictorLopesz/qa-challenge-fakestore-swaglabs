# QA Challenge: FakeStore + SwagLabs

## Project Description

This project contains automated tests (API and UI) using Cypress.
Includes:

- API tests (validate "electronics" products with rate > 4)
- UI tests (validate product sorting on SwagLabs page)
- **Page Object Model (POM)** structure
- Runner and report setup for CI/CD pipelines

## Prerequisites

- Node.js >= 18
- npm >= 9
- Git

** Installation **
```bash

Clone the repository:

git clone https://github.com/VictorLopesz/qa-challenge-fakestore-swaglabs.git

** Navigate to the project folder: **
cd qa-challenge-fakestore-swaglabs

** Install dependencies: **
npm ci

## Running Tests Locally

** API and UI tests: **
npx cypress open   # opens the Cypress UI for manual test execution
OR
npx cypress run    # runs all tests headlessly in the terminal

** Local reports and artifacts: **

cypress/screenshots/
cypress/videos/
cypress/results/

## Running Tests in CI/CD
The pipeline is already configured in .github/workflows/cypress.yml.

When pushing to the main branch, the CI/CD automatically executes all tests.

Artifacts from the pipeline include videos, screenshots, and JUnit reports.

### Viewing Reports in CI/CD
Go to your GitHub repository → Actions → click the latest workflow.

Open the Cypress job.

Under Artifacts, you will find:

cypress/videos/ → test execution videos

cypress/screenshots/ → screenshots of failures

results/ → JUnit reports (can be opened with HTML viewers or VSCode plugins)

🔹 Tip: Use JUnit Viewer or VSCode plugins to view JUnit reports as HTML.

## Project Structure

qa-challenge-fakestore-swaglabs/
│
├─ cypress/                 # UI and API tests
├─ node_modules/            # project dependencies
├─ package.json
├─ package-lock.json
├─ cypress.config.js
├─ .gitignore
└─ .github/workflows/cypress.yml   # CI/CD pipeline configuration

```
