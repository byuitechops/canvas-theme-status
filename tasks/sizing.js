let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                    sizing
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The sizing task's purpose is to take a
 *  screenshot of the page centered around the
 *  images of different sizes on the page.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function sizing(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/sizing`;
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Sizing',
    filename: 'sizing.png',
    doTask: sizing,
    filepath: '',
    fullPage: true,
    subdomain: '',
    url: ''
};

module.exports = taskObject;