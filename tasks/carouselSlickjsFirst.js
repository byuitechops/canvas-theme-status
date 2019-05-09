let takeScreenshot = require('../helper_scripts/takeScreenshot.js');

async function carouselSlickjsFirst(page) {
    await page.goto(taskObject.url);
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Carousel - Slickjs - First',
    filename: 'carousel_slickjs_first.png',
    doTask: carouselSlickjsFirst,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/carousel-slickjs'
};

module.exports = taskObject;