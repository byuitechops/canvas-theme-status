let takeScreenshot = require('../helper_scripts/takeScreenshot.js');
let delay = require('../helper_scripts/delay');

async function accordionClose(page) {
    await page.goto(taskObject.url);
    await page.click('#accordion > h3');
    await delay('1000');
    await page.click('#accordion > h3');
    await delay('1000');
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Accordion - Closed',
    filename: 'accordion_closed.png',
    doTask: accordionClose,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/accordion'
};

module.exports = taskObject;