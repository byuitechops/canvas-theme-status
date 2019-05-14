let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *             WYSIWYGStyleInjection
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The WYSIWYGStyleInjection task's purpose is
 *  to take a screenshot to verify that the
 *  style injection is working properly.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function WYSIWYGStyleInjection(page) {
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page.
    await takeScreenshot(page, taskObject, '#edit_assignment_link');
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: WYSIWYG Style Injection',
    filename: 'wyswyg_style_injection.png',
    doTask: WYSIWYGStyleInjection,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/assignments/1332203/edit'
};

module.exports = taskObject;