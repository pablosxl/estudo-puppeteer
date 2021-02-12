const puppeteer = require('puppeteer');


const googleSearch = async () => {
    require("dotenv").config();
    
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(process.env.PIPE_URL);
    await page.waitFor('input[name="login"]');
    await page.type('input[name="login"]', process.env.PIPE_LOGIN);
    await page.type('input[name="password"]', process.env.PIPE_PASSWORD);
    await page.keyboard.press('Enter');
}
googleSearch();