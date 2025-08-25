# QA Challenge: FakeStore + SwagLabs

## Project Description

This project contains automated tests (API and UI) using Cypress.
Includes:

- API tests (validate "electronics" products with rate > 4)
- UI tests (validate product sorting on SwagLabs page)
- **Page Object Model (POM)** structure
- Runner and report setup for GitLab CI/CD

## Prerequisites

- Node.js >= 18
- npm >= 9
- Git

** Installation **

Clone the repository:

```bash
git clone https://gitlab.com/victorhlopesqa-challenge-fakestore-swaglabs.git

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

## Running Tests in GitLab CI/CD

- The GitLab pipeline is already configured in .gitlab-ci.yml.

- When pushing to the main branch, GitLab CI automatically executes all tests.

- Artifacts from the pipeline include videos, screenshots, and JUnit reports.

### Viewing Reports in GitLab

1. Go to your project → CI/CD → Pipelines → click the latest pipeline.

2. Open the cypress-tests job.

3. Under the Artifacts tab, you will find:

- cypress/videos/ → test execution videos

- cypress/screenshots/ → screenshots of failures

- results/ → JUnit reports (can be opened with HTML viewers or VSCode plugins)

🔹 Tip: Use JUnit Viewer or VSCode plugins to view JUnit reports as HTML.

## Project Structure

challenge-fakestore-swaglabs/
│
├─ cypress/                 # UI and API tests
├─ node_modules/            # project dependencies
├─ package.json
├─ package-lock.json
├─ cypress.config.js
├─ .gitignore
└─ .gitlab-ci.yml           # CI/CD pipeline configuration
```
