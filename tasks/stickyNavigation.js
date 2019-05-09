let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function stickyNavigation(page) {
    await page.goto(taskObject.url);
    await page.click('#byui-copyright');
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Sticky Navigation',
    filename: 'sticky_navigation.png',
    doTask: stickyNavigation,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/sticky-navigation'
};

module.exports = taskObject;