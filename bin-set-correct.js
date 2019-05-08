const canvas = require('canvas-api-wrapper');

const {
    main
} = require('./main.js');
let course_id;
let module_id;

async function getInput() {
    // Check if the user has supplied a course id and module id. If not, set it to the default
    course_id = process.argv[2] ? process.argv[2] : 37748;
    module_id = process.argv[3] ? process.argv[3] : 437567;
    // Get the course's modules
    return await canvas.get(`https://byui.instructure.com/api/v1/courses/${course_id}/modules/${module_id}/items`);
}

function handleError(error) {
    console.error(error);
    return;
}

async function start() {
    try {
        var input = await getInput();
        await main(input, './correct_screenshots');
    } catch (error) {
        handleError(error);
    }
}

start();