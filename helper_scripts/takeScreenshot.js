/************************************************
 *                takeScreenshot
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 *  2. taskObject: Object
 *  3. [selector]: String
 * 
 * Description:
 *  The takeScreenshot function takes a
 *  screenshot of the page after clicking a
 *  selector. Clicking the selector allows for
 *  multiple pages to be screenshoted in a
 *  headed browser.
 * 
 *  If the program is running into errors often
 *  check to make sure the default selector
 *  parameter still exists in Canvas. You may
 *  just need to update the selector to fix the
 *  program. Canvas updates often so CSS 
 *  selectors can change.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function takeScreenshot(page, taskObject, selector = '#breadcrumbs > ul > li:nth-child(4) > span') {
    // Take the screenshot of the page with the specified path and whether it needs to be a fullpage or not
    await page.screenshot({
        path: `${taskObject.filepath}/${taskObject.filename}`,
        fullPage: taskObject.fullPage
    });
    // Click the specified selector
    await page.click(selector);
    console.log(`Screenshot Taken: ${taskObject.filepath}/${taskObject.filename}`);
}

module.exports = takeScreenshot;