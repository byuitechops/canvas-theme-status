const fs = require('fs');
const PDFDocument = require('pdfkit');
const {
    DateTime
} = require('luxon');
const {
    main
} = require('./main.js');
const doc = new PDFDocument;

function makeOutput(completedTasks) {
    // Create a PDF with all the screenshots on it.
    let now = DateTime.local();
    doc.pipe(fs.createWriteStream(`./PDFs/canvas-theme-status-${now.year}-${now.month}-${now.day}-${now.hour}-${now.minute}-${now.second}.pdf`));
    doc.fontSize(12).text(now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS), {
        align: 'right'
    });
    completedTasks.forEach((completedTask, i) => {
        doc.fontSize(25).text(`Module: ${completedTask.title}`, {
            align: 'center'
        });
        doc.fontSize(18).text('Intended', {
            align: 'center'
        });
        doc.image(`./correct_screenshots/${completedTask.filename}`, {
            fit: [500, 310],
            align: 'center'
        });
        doc.moveDown();
        doc.fontSize(18).text('Current', {
            align: 'center'
        });
        doc.image(`./screenshots/${completedTask.filename}`, {
            fit: [500, 310],
            align: 'center'
        });
        if (i !== completedTasks.length - 1) {
            doc.addPage();
        }
    });
    doc.end();
    console.log('PDF Written');
    return;
}

function handleError(error) {
    console.error(error);
    return;
}

async function start() {
    try {
        var output = await main();
        makeOutput(output);
    } catch (error) {
        handleError(error);
    }
}

start();