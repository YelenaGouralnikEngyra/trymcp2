import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

// Login smoke tests

test.describe('Login smoke', () => {
  test('logs in successfully (helper)', async ({ page }) => {
    await login(page);
  await expect(page.getByTestId('sidenav-quote-tl-qoute-link')).toBeVisible({ timeout: 20000 });
  });

  test('logs in successfully (inline)', async ({ page }) => {
    await page.goto('https://feature16.integratedtm.dev/landing');
    await page.getByText('Sign In').click();
    await page.getByLabel('Email address').fill('aqacustomeruser@test.mycarrier.io');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.getByLabel('Enter your password', { exact: true }).fill('D0NTg1vethisout!');
    await Promise.all([
      page.waitForLoadState('networkidle'),
      page.getByRole('button', { name: 'Continue' }).click()
    ]);
    await expect(page.getByTestId('sidenav-quote-tl-qoute-link')).toBeVisible({ timeout: 30000 });
  });
});
