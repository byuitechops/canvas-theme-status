const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const {
    DateTime
} = require('luxon');
const {
    main
} = require(path.join(__dirname, '/main.js'));
const doc = new PDFDocument;

/************************************************
 *                  makeOutput
 * 
 * Parameters:
 *  1. completedTasks: Array[Object]
 * 
 * Description:
 *  Creates a PDF based off of the information in
 *  the completed tasks array.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function makeOutput(completedTasks) {
    // Get the current time
    let now = DateTime.local();
    // Start creating the PDF. Name it with the current date/time
    doc.pipe(fs.createWriteStream(path.join(__dirname, `/PDFs/canvas-theme-status-${now.year}-${now.month}-${now.day}-${now.hour}-${now.minute}-${now.second}.pdf`)));
    // Put the date at the top right of the PDF
    doc.fontSize(12).text(now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS), {
        align: 'right'
    });
    // Loop through all of the completed tasks and create a page for each task
    completedTasks.forEach((completedTask, i) => {
        // Add the title to the top of the page
        doc.fontSize(25).text(completedTask.title, {
            align: 'center'
        });
        // Add intended under the title
        doc.fontSize(18).text('Intended', {
            align: 'center'
        });
        // Add the intended image to the page
        doc.image(path.join(__dirname, `/correct_screenshots/${completedTask.filename}`), {
            fit: [500, 310],
            align: 'center'
        });
        // Add current under the intended picture
        doc.moveDown();
        doc.fontSize(18).text('Current', {
            align: 'center'
        });
        // Add the current image to the page
        doc.image(path.join(__dirname, `/screenshots/${completedTask.filename}`), {
            fit: [500, 310],
            align: 'center'
        });
        // Check if another page needs to be added
        if (i !== completedTasks.length - 1) {
            doc.addPage();
        }
    });
    // Finalize and write the document
    doc.end();
    console.log('PDF Written');
}

/************************************************
 *                 handleError
 * 
 * Parameters:
 *  1. error: String
 * 
 * Description:
 *  Logs the error to the user
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function handleError(error) {
    console.error(error);
}

/************************************************
 *                    start
 * 
 * Parameters:
 *  None
 * 
 * Description:
 *  The driver function for bin.js. This function
 *  handles calling the input, main, and output
 *  functions.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
async function start() {
    try {
        var output = await main();
        makeOutput(output);
    } catch (error) {
        handleError(error);
    }
}

start();