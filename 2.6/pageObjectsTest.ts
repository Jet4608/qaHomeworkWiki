import {googlePage} from './pageObject';
import {Builder, By, Capabilities WebDriver, until, webElement} from 'selenium-webdriver';
const chromedriver = require('chromedriver');

const driver; WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();
const google = new googlePage(driver, "https://www.google.com");

test("do a search", async () => {
    await google.navigate();
    await google.search('legos');
    await google.getResults();
    await google.driver.quit();
});