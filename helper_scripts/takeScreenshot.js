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
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function takeScreenshot(page, taskObject, selector = '#byui-copyright') {
    // Click the specified selector
    await page.click(selector);
    // Take the screenshot of the page with the specified path and whether it needs to be a fullpage or not
    await page.screenshot({
        path: `${taskObject.filepath}/${taskObject.filename}`,
        fullPage: taskObject.fullPage
    });
    console.log(`Screenshot Taken: ${taskObject.filepath}/${taskObject.filename}`);
}

module.exports = takeScreenshot;