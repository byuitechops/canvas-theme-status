let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function prismHighlight(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Prism Highlight',
    filename: 'prism_highlight.png',
    doTask: prismHighlight,
    filepath: '',
    fullPage: true,
    url: 'https://byui.instructure.com/courses/37748/pages/prism-highlight'
};

module.exports = taskObject;