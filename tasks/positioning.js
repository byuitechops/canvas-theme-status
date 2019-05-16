let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                 positioning
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The positioning task's purpose is to take a
 *  screenshot of the page focused around the
 *  pictures at different location on the page.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function positioning(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/positioning`;
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Positioning',
    filename: 'positioning.png',
    doTask: positioning,
    filepath: '',
    fullPage: true,
    subdomain: '',
    url: ''
};

module.exports = taskObject;