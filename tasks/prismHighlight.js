let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                prismHighlight
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The prismHighlight task's purpose is to take
 *  a screenshot of the page centered around if
 *  the code highlighter is working.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function prismHighlight(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/prism-highlight`;
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Prism Highlight',
    filename: 'prism_highlight.png',
    doTask: prismHighlight,
    filepath: '',
    fullPage: true,
    subdomain: '',
    url: ''
};

module.exports = taskObject;