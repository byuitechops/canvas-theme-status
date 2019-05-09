const pMap = require('p-map');
const pupeteer = require('puppeteer');
const tasks = require('./tasks/tasks.js');

let browser;
let filepath;
/*************************************************************************
 * Module Description
 *************************************************************************/

async function doModuleTasks(task) {
    const page = await browser.newPage();
    page.setViewport({
        width: 1920,
        height: 1080
    });
    task.filepath = filepath;
    await task.doTask(page);
}

async function main(_filepath = './screenshots') {
    filepath = _filepath;
    // Loop through each object to allow Pupeteer to go to each HTML page
    browser = await pupeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://byui.instructure.com/login/canvas');
    await page.$eval('input#pseudonym_session_unique_id', el => el.value = '');
    await page.$eval('input#pseudonym_session_password', el => el.value = '');
    await page.click('#login_form > div.ic-Login__actions > div.ic-Form-control.ic-Form-control--login > button');
    await page.close();
    await pMap(tasks, doModuleTasks, {
        concurrency: 10
    });
    await browser.close();
    console.log('Screenshots Taken');
    return tasks;
}

module.exports = {
    main
};