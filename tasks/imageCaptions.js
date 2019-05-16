let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                imageCaptions
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The imageCaptions task's function is to take
 *  a screenshot of the page centered around if
 *  an image's captions are working.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function imageCaptions(page) {
    taskObject.url = `https://${taskObject.subdomain}.instructure.com/courses/37748/pages/image-captions`;
    // Go to the page
    await page.goto(taskObject.url);
    // Take the screenshot
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Image Captions',
    filename: 'image_captions.png',
    doTask: imageCaptions,
    filepath: '',
    fullPage: false,
    subdomain: '',
    url: ''
};

module.exports = taskObject;