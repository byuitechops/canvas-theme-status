let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function WYSIWYGStyleInjection(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject, '#edit_assignment_link');
    await page.close();
}

let taskObject = {
    title: 'Module: WYSIWYG Style Injection',
    filename: 'wyswyg_style_injection.png',
    doTask: WYSIWYGStyleInjection,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/assignments/1332203/edit'
};

module.exports = taskObject;