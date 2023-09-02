const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://stockx.com/");

    // Wait for the elements to be visible
    await page.waitForSelector('.chakra-text.css-3lpefb' + 'chakra-text css-nsvdd9');

    const elements = await page.$$eval('.chakra-text.css-3lpefb' + 'chakra-text css-nsvdd9', elements => {
        return elements.map(element => element.textContent);
    });

    if (elements.length > 0) {
        console.log("Text elements are:");
        elements.forEach((text, index) => {
            console.log(`${index + 1}: ${text}`);
        });
    } else {
        console.log("No elements found.");
    }

    await browser.close();
})();
