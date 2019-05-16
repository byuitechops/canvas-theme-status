let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                stickyNavigation
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The stickyNavigation task's purpose is to
 *  take a screenshot of the page after
 *  scrolling to the bottom of the page. This
 *  will allow us to see if the side-nav bar is
 *  being sticky.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function stickyNavigation(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/sticky-navigation`;
    // Go to the page
    await page.goto(taskObject.url);
    // Click the footer at the bottom of the page to imitate scrolling to the bottom
    await page.click('#byui-copyright');
    // Take a screenshot
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Sticky Navigation',
    filename: 'sticky_navigation.png',
    doTask: stickyNavigation,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;