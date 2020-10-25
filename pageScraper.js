// object with url property and scraper method
const scraperObject = {
    url: 'http://books.toscrape.com',
    // perform scraping
    async scraper(browser){
        // newPage creates a new page instance in the browser
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // goto navigates to the url
        await page.goto(this.url);

    }
}

module.exports = scraperObject;