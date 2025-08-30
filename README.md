# Playwright UI Test Framework

This repository contains a minimal Playwright setup to test the IntegratedTM login flow.

## Features
- Playwright Test with TypeScript
- Multi-browser (Chromium, Firefox, WebKit)
- Environment variable support via `.env`
- Trace, screenshot & video artifacts on failure
- Single login test example

## Getting Started

1. Install dependencies:
```bash
npm install
```
2. (Optional) Create a `.env` file based on `.env.example` and add secure credentials:
```
ITM_USERNAME=your_user
ITM_PASSWORD=your_password
```
3. Run tests (headless):
```bash
npm test
```
4. Run in headed mode to watch the browser:
```bash
npm run test:headed
```
5. Open the trace viewer (after a failed retry or when generated):
```bash
npm run trace:open -- trace.zip
```

## Running from VS Code UI
- Open the Testing panel (beaker icon) and click the run button next to the test.
- Or open `tests/login.spec.ts` and click the green triangle above the test.

## Security Note
The provided password in the example test is for demonstration only. Replace with a secure secret loaded from environment variables / secret manager. Avoid committing real credentials.
