async function takeScreenshot(page, taskObject, selector = '#byui-copyright') {
    await page.click(selector);
    await page.screenshot({
        path: `${taskObject.filepath}/${taskObject.filename}`,
        fullPage: taskObject.fullPage
    });
    console.log(`Screenshot Taken: ${taskObject.filepath}/${taskObject.filename}`);
}

module.exports = takeScreenshot;