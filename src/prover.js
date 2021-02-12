const puppeteer = require('puppeteer');


const googleSearch = async () => { 
    require("dotenv").config();
    
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(process.env.PROVER_URL);
    await page.waitFor('#GoogleExchange > a');
    await page.click('#GoogleExchange > a');
    await page.waitFor('input[name="login"]');
    await page.type('input[name="login"]',process.env.PROVER_LOGIN);
    await page.type('input[name="password"]',process.env.PROVER_PASSWORD);
    await page.keyboard.press('Enter');
}
googleSearch();