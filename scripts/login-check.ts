import { chromium } from 'playwright';
import { login } from '../helpers/auth';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await login(page);
    console.log('LOGIN SUCCESS: sidenav TL quote link visible');
  } catch (err) {
    console.error('LOGIN FAILED', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
