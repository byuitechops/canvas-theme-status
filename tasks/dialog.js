let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                    dialog
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The dialog task's purpose is to take a
 *  screenshot of the dialog box that appears
 *  after you click the dialog button.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function dialog(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/dialog`;
    // Go to the page
    await page.goto(taskObject.url);
    // Check if the selector exists
    if (await page.$('#link_1') !== null) {
        // Click the dialog button
        await page.click('#link_1');
    }
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Dialog',
    filename: 'dialog.png',
    doTask: dialog,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;