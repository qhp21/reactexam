// @ts-check

import { test, expect } from '@playwright/test';

test('step1', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  const shopList = await page.locator('.shopList');
  await expect(shopList).toBeVisible();
  await expect(shopList.locator('select')).toBeVisible();
  const shopTable = await shopList.locator('.shopTable');
  await expect(shopTable).toBeVisible();
});

test('step2', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  const shopList = await page.locator('.shopList');
  await expect(shopList).toBeVisible();
  const shopTable = await shopList.locator('.shopTable');
  await expect(shopTable).toBeVisible();
  const trCount = await page.locator('tbody').locator('tr').count();
  await expect(trCount).toBe(1); // по умолчанию значение "прочее" и там один item
  await expect(page.getByRole('cell', { name: 'Ёлка' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '1500' })).toBeVisible();
});

test('step3', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });

  // Проверяем, что фильтр работает для "fruits"
  const select = page.locator('select');
  await select.selectOption('fruits');
  const trCountFruits = await page.locator('tr').count();
  console.log('Количество для fruits:', trCountFruits);
  await expect(trCountFruits).toBe(3);

  // Проверяем, что фильтр работает для "meat"
  await select.selectOption('meat');
  const trCountMeat = await page.locator('tr').count();
  console.log('Количество для meat:', trCountMeat);
  await expect(trCountMeat).toBe(2);
});

test('step4', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });

  const select = page.locator('select');
  await select.selectOption('fruits');
  const firstFruit = await page
    .locator('tbody')
    .locator('tr')
    .locator('td')
    .first()
    .innerText();

  await expect(select).toBeVisible();
  console.log('Сортировка фруктов, первый:', firstFruit);
  await expect(firstFruit).toBe('Ананас');
});
