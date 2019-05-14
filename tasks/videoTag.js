let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

/************************************************
 *                   videoTag
 * 
 * Parameters:
 *  1. page: Object[Pupeteer]
 * 
 * Description:
 *  The videoTag task's purpose is to take a
 *  screenshot of the page to verify that videos
 *  are recieving the correct styles applied.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function videoTag(page) {
    // Go to the page
    await page.goto(taskObject.url);
    // Take a screenshot of the page
    await takeScreenshot(page, taskObject);
    // Close the page/tab
    await page.close();
}

let taskObject = {
    title: 'Module: Video Tag',
    filename: 'video_tag.png',
    doTask: videoTag,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/video-tag'
};

module.exports = taskObject;