let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function accordionOpen(page) {
    await page.goto(taskObject.url);
    await page.click('#accordion > h3');
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Accordion - Open',
    filename: 'accordion_open.png',
    doTask: accordionOpen,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/accordion'
};

module.exports = taskObject;