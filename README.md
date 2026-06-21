# Jones Automation Exercise

A Playwright automation script for the Jones assessment.

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- Playwright + Chromium

## Installation

```bash
npm install playwright
npx playwright install chromium
```

## How to run

```bash
node automation.js
```

## What to expect

1. A Chrome browser will open and navigate to the test site
2. The form fields (Name, Email, Phone, Company, Website) will be filled automatically
3. The Number of Employees dropdown will change to 51-500
4. A screenshot of the filled form will be saved as `screenshot.png`
5. The "Request a call back" button will be clicked
6. Once the Thank You page is reached, a message will be printed to the console
