const puppeteer = require('puppeteer');


const googleSearch = async () => {
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.waitFor('input[name="q"]');
    await page.type('input[name="q"]','g1');
    await page.keyboard.press('Enter');
}
googleSearch();