let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function homepage(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Homepage',
    filename: 'homepage.png',
    doTask: homepage,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/homepage'
};

module.exports = taskObject;