let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *               copyrightFooter
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The copyrightFooter task's purpose is to take
 *  a screenshot of the page to capture if the 
 *  copyright footer appears at the bottom
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function copyrightFooter(page) {
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Copyright Footer',
    filename: 'copyright_footer.png',
    doTask: copyrightFooter,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/copyright-footer'
};

module.exports = taskObject;