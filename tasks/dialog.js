let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function dialog(page) {
    await page.goto(taskObject.url);
    await page.click('#link_1');
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Dialog',
    filename: 'dialog.png',
    doTask: dialog,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/dialog'
};

module.exports = taskObject;