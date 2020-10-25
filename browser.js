const puppeteer = require('puppeteer');

// start the browser and return an instance of it
async function startBrowser(){
    let browser;
    try {
        console.log("Opening the browser......");
        // launch method returns a Promise
        // await makes sure the Promise resolves
        browser = await puppeteer.launch({
            // the browser will run with an Interface so you can watch your script execute
            headless: false,
            // allows to visit websites that aren’t hosted over a secure HTTPS protocol and ignore any HTTPS-related errors.
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }

    return browser;
}

module.exports = {
    startBrowser
};