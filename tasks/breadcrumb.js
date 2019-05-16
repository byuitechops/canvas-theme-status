let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                 breadcrumb
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The breadcrumb task's purpose is to take a
 *  screenshot of the breadcrumbs on the page.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function breadcrumb(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/breadcrumb`;
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot
    await takeScreenshot(page, taskObject);
    // Close the page
    await page.close();
}

let taskObject = {
    title: 'Module: Breadcrumb',
    filename: 'breadcrumb.png',
    doTask: breadcrumb,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;