let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function videoTag(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
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