const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should outname name and age', () => {
    expect(generateText('Nakamura', 100)).toBe('Nakamura (100 years old)')
});

test('should generate a valida text output', () => {
    const text = checkAndGenerate('Nakamura', 100);
    expect(text).toBe('Nakamura (100 years old)')
});

test('', async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920, 1080']
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto('https://qiita.com/');
    expect(await page.$('.st-Header_signupButton')).toBeTruthy(); // page.$は要素がなければnullを返す
    await context.close()
}, 20000)