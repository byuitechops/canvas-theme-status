let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function tabs(page) {
    await page.goto(taskObject.url);
    await page.click('#ui-id-2');
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Tabs',
    filename: 'tabs.png',
    doTask: tabs,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/tabs'
};

module.exports = taskObject;