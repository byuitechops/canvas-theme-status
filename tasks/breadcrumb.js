let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function breadcrumb(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Breadcrumb',
    filename: 'breadcrumb.png',
    doTask: breadcrumb,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/breadcrumb'
};

module.exports = taskObject;