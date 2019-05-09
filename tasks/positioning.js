let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function positioning(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Positioning',
    filename: 'positioning.png',
    doTask: positioning,
    filepath: '',
    fullPage: true,
    url: 'https://byui.instructure.com/courses/37748/pages/positioning'
};

module.exports = taskObject;