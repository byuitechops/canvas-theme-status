const fs = require('fs');
const canvas = require('canvas-api-wrapper');
const PDFDocument = require('pdfkit');
const {
    DateTime
} = require('luxon');

const {
    main
} = require('./main.js');
const doc = new PDFDocument;
let course_id;
let module_id;

async function getInput() {
    // Check if the user has supplied a course id and module id. If not, set it to the default
    course_id = process.argv[2] ? process.argv[2] : 37748;
    module_id = process.argv[3] ? process.argv[3] : 437567;
    // Get the course's modules
    return await canvas.get(`https://byui.instructure.com/api/v1/courses/${course_id}/modules/${module_id}/items`);
}

function makeOutput(output) {
    // Create a PDF with all the screenshots on it.
    let imageFilepaths = fs.readdirSync('./screenshots');
    let now = DateTime.local();
    doc.pipe(fs.createWriteStream(`./PDFs/canvas-theme-status-${now.year}-${now.month}-${now.day}-${now.hour}-${now.minute}-${now.second}.pdf`));
    doc.fontSize(12).text(now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS), {
        align: 'right'
    });
    imageFilepaths.forEach((imageFilepath, i) => {
        let title = imageFilepath.replace(/.png/, '');
        doc.fontSize(25).text(`Module: ${title}`, {
            align: 'center'
        });
        doc.fontSize(18).text('Intended', {
            align: 'center'
        });
        doc.image(`./correct_screenshots/${imageFilepath}`, {
            fit: [500, 550],
        });
        doc.moveDown();
        doc.fontSize(18).text('Current', {
            align: 'center'
        });
        doc.image(`./screenshots/${imageFilepath}`, {
            fit: [500, 550],
        });
        if (i !== imageFilepaths.length - 1) {
            doc.addPage();
        }
    });
    doc.end();
    console.log('PDF Written');
    return output;
}

function handleError(error) {
    console.error(error);
    return;
}

async function start() {
    try {
        var input = await getInput();
        var output = await main(input);
        makeOutput(output);
    } catch (error) {
        handleError(error);
    }
}

start();