let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function imageCaptions(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Image Captions',
    filename: 'image_captions.png',
    doTask: imageCaptions,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/image-captions'
};

module.exports = taskObject;