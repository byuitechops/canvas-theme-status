let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                  homepage
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The homepage task's purpose is to take a
 *  screenshot of the course's homepage.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function homepage(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/homepage`;
    // Go to the page
    await page.goto(taskObject.url);
    // Take the screenshot
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Homepage',
    filename: 'homepage.png',
    doTask: homepage,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;