const pageScraper = require('./pageScraper');

// takes the browser instance and pass it to the function
async function scrapeAll(browserInstance){
    let browser;
    try {
        browser = await browserInstance;
        // pass browser instance as an argument and uses it to scrape pages
        await pageScraper.scraper(browser);

    }
    catch(err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)