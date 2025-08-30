import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

// Smoke test that only verifies login success.

test('user can login and sees TL Quote link', async ({ page }) => {
  await login(page);
  await expect(page.getByTestId('sidenav-quote-tl-qoute-link')).toBeVisible();
});

// Extended flow based on provided sample steps.

test('user can start new truckload quote', async ({ page }) => {
  await login(page);
  await page.getByTestId('sidenav-quote-tl-qoute-link').click();
  await page.getByTestId('new-quote-btn').click();
  await page.getByTestId('select-all-providers').click();
  await page.getByTestId('tl-provider-3').click();
  await page.getByTestId('truckload-form-basic-pickup-location').click();
  await page.getByTestId('truckload-form-basic-pickup-location').fill('2');
  // Minimal assertion that the field has value
  await expect(page.getByTestId('truckload-form-basic-pickup-location')).toHaveValue(/2/);
});
