let takeScreenshot = require('../helper_scripts/takeScreenshot.js');
let delay = require('../helper_scripts/delay');

/************************************************
 *                accordionOpen
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The accordionOpen task's purpose is to
 *  take a screenshot of an accordion after it
 *  has been opened.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function accordionOpen(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/accordion`;
    // Go to the page
    await page.goto(taskObject.url);
    // Check if the selector exists
    if (await page.$('#accordion > h3') !== null) {
        // Click the accordion to open it
        await page.click('#accordion > h3');
        await delay('1000');
    }
    // Take a screenshot
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Accordion - Open',
    filename: 'accordion_open.png',
    doTask: accordionOpen,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;