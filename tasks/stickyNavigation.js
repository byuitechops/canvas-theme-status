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
    // Check if the selector exists
    if (await page.$('#wiki_page_show > div:nth-child(3) > div.module-sequence-footer > div') !== null) {
        // Imitate scrolling before taking the screenshot by clicking the bottom of the page
        await page.click('#wiki_page_show > div:nth-child(3) > div.module-sequence-footer > div');
    }
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