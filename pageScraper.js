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
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.page_inner');
        // Get the link to all the required books
        let urls = await page.$$eval('section ol > li', links => {
            // Make sure the book to be scraped is in stock
            links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
            // Extract the links from the data
            links = links.map(el => el.querySelector('h3 > a').href)
            return links;
        });
        console.log(urls);
    }
}

module.exports = scraperObject;