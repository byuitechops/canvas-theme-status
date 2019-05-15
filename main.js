const pMap = require('p-map');
const pupeteer = require('puppeteer');
const tasks = require('./tasks/tasks.js');

let browser;
let filepath;

/************************************************
 *                doModuleTasks
 * 
 * Parameters:
 *  1. task: Object
 * 
 * Description:
 *  The doModuleTasks function creates a new
 *  page, sets the viewport for the browser,
 *  updates the tasks filepath, and calls the
 *  task's function.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function doModuleTasks(task) {
    // Make a new page for each Task
    const page = await browser.newPage();
    // Set the page to 1920x1080. This will set the screenshot's resolution
    page.setViewport({
        width: 1920,
        height: 1080
    });
    // Update the task object's filepath
    task.filepath = filepath;
    // Do the task
    await task.doTask(page);
}

/************************************************
 *                  main
 * 
 * Parameters:
 *  1. [_filepath]: String
 * 
 * Description:
 *  The driver function for completing all of
 *  the tasks. This function starts Pupeteer and
 *  takes care of logging into Canvas.
 * 
 * Return Type:
 *  Array[Object]
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function main(_filepath = './screenshots') {
    // Set the filepath to either a parameter specified value or the default
    filepath = _filepath;
    // Start Pupeteer
    browser = await pupeteer.launch({
        headless: false
    });
    // Log-in to Canvas
    const page = await browser.newPage();
    await page.goto('https://byui.instructure.com/login/canvas');
    await page.$eval('input#pseudonym_session_unique_id', el => el.value = ''); // !!!Remember to remove this before commiting to Git!!!
    await page.$eval('input#pseudonym_session_password', el => el.value = ''); // !!!Remember to remove this before commiting to Git!!!
    await page.click('#login_form > div.ic-Login__actions > div.ic-Form-control.ic-Form-control--login > button');
    await page.close();
    // Loop through all of the tasks. Only allow 10 concurrently
    await pMap(tasks, doModuleTasks, {
        concurrency: 10
    });
    // End Pupeteer
    await browser.close();
    console.log('Screenshots Taken');
    // Return the tasks to bin.js to allow the output function to create a task specific PDF
    return tasks;
}

module.exports = {
    main
};