let takeScreenshot = require('../helper_scripts/takeScreenshot.js');
let delay = require('../helper_scripts/delay');

/************************************************
 *                accordionClose
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The accordion close task's purpose is to
 *  take a screenshot of an accordion after it
 *  has been closed.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function accordionClose(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/accordion`;
    // Go to the page
    await page.goto(taskObject.url);
    // Click the accordion to open it
    await page.click('#accordion > h3');
    // Wait for the CSS animation
    await delay('1000');
    // Click the accordion again to close it
    await page.click('#accordion > h3');
    // Wait for the CSS animation
    await delay('1000');
    // Take a screenshot
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Accordion - Closed',
    filename: 'accordion_closed.png',
    doTask: accordionClose,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;