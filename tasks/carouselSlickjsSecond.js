let takeScreenshot = require('../helper_scripts/takeScreenshot.js');
let delay = require('../helper_scripts/delay.js');

/************************************************
 *             carouselSlickjsSecond
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The carouselSlickjsSecond task's purpose is
 *  to take a screenshot of the carousel after
 *  the arrow has been clicked
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function carouselSlickjsSecond(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/carousel-slickjs`;
    // Go to the page
    await page.goto(taskObject.url);
    // Check if the selector exists
    if (await page.$('#wiki_page_show > div.show-content.user_content.clearfix.enhanced > div > div > button.slick-next.slick-arrow') !== null) {
        // Click the next button on the carousel
        await page.click('#wiki_page_show > div.show-content.user_content.clearfix.enhanced > div > div > button.slick-next.slick-arrow');
        // Wait for the CSS animation
        await delay('1000');
    }
    // Take the screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Carousel - Slickjs - Second',
    filename: 'carousel_slickjs_second.png',
    doTask: carouselSlickjsSecond,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;