let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function copyrightFooter(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Copyright Footer',
    filename: 'copyright_footer.png',
    doTask: copyrightFooter,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/copyright-footer'
};

module.exports = taskObject;