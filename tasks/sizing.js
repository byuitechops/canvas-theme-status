let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function sizing(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Sizing',
    filename: 'sizing.png',
    doTask: sizing,
    filepath: '',
    fullPage: true,
    url: 'https://byui.instructure.com/courses/37748/pages/sizing'
};

module.exports = taskObject;