import { Page, expect } from '@playwright/test';

export interface LoginOptions {
  email?: string;
  password?: string;
  landingUrl?: string;
}

const DEFAULT_LANDING = 'https://feature16.integratedtm.dev/landing';

export async function login(page: Page, opts: LoginOptions = {}) {
  const email = opts.email || process.env.ITM_USERNAME || 'aqacustomeruser@test.mycarrier.io';
  const password = opts.password || process.env.ITM_PASSWORD || 'D0NTg1vethisout!';
  const landing = opts.landingUrl || DEFAULT_LANDING;

  await page.goto(landing, { waitUntil: 'domcontentloaded' });
  await page.getByText('Sign In', { exact: false }).first().click();
  await page.getByLabel('Email address', { exact: true }).fill(email);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByLabel('Enter your password', { exact: true }).fill(password);
  await page.getByRole('button', { name: 'Continue' }).click();

  // Basic assertion that a signed-in element appears
  await expect(page.getByTestId('sidenav-quote-tl-qoute-link')).toBeVisible({ timeout: 30000 });
}
