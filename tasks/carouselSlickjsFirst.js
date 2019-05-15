let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *             carouselSlickjsFirst
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The carouselSlickjsFirst task's purpose is
 *  to take a screenshot of the default carousel
 *  item.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function carouselSlickjsFirst(page) {
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Carousel - Slickjs - First',
    filename: 'carousel_slickjs_first.png',
    doTask: carouselSlickjsFirst,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/carousel-slickjs'
};

module.exports = taskObject;