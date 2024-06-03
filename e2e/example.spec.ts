import { test, expect } from '@playwright/test';

test('Margin cards in the main page', async ({ page }) => {
  await page.goto('http://localhost:5000/');
  const card = page.locator('.card').first();
  const margin = await card.evaluate(card => {
    const style = window.getComputedStyle(card);
    return style.margin;
  });
  expect(margin).toBe('60px 0px 0px');
});


test('Add new book', async ({ page }) => {
  await page.goto('http://localhost:5000/');
  await page.getByRole('link', { name: 'Add a New Book' }).click();
  await page.getByPlaceholder('Entry a New Title').click();
  await page.getByPlaceholder('Entry a New Title').fill('El Señor de los Anillos');
  await page.getByPlaceholder('Entry a New Title').press('Tab');
  await page.getByPlaceholder('Author').fill('simon');
  await page.getByPlaceholder('http://website.com').click();
  await page.getByPlaceholder('http://website.com').fill('https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg');
  await page.locator('textarea[name="description"]').click();
  await page.locator('textarea[name="description"]').fill('description');
  await page.getByRole('button', { name: 'Post Entry' }).click();
  
});
