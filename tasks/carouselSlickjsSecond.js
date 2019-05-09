let takeScreenshot = require('../helper_scripts/takeScreenshot.js');
let delay = require('../helper_scripts/delay.js');

async function carouselSlickjsSecond(page) {
    await page.goto(taskObject.url);
    await page.click('#wiki_page_show > div.show-content.user_content.clearfix.enhanced > div > div > button.slick-next.slick-arrow');
    await delay('1000');
    await takeScreenshot(page, taskObject);
    await page.close();
}

let taskObject = {
    title: 'Module: Carousel - Slickjs - Second',
    filename: 'carousel_slickjs_second.png',
    doTask: carouselSlickjsSecond,
    filepath: '',
    fullPage: false,
    url: 'https://byui.instructure.com/courses/37748/pages/carousel-slickjs'
};

module.exports = taskObject;