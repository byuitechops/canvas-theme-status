let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                    tabs
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The tabs task's purpose is to take a picture
 *  after one of the tabs has been clicked.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function tabs(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/tabs`;
    // Go to the page
    await page.goto(taskObject.url);
    // Check if the second tab selector exists
    if (await page.$('#ui-id-2') !== null) {
        // Click the second tab
        await page.click('#ui-id-2');
    }
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Tabs',
    filename: 'tabs.png',
    doTask: tabs,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;