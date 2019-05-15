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
    // Go to the page
    await page.goto(taskObject.url);
    // Click the dialog button
    await page.click('#link_1');
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
    url: 'https://byui.instructure.com/courses/37748/pages/dialog'
};

module.exports = taskObject;