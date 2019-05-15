const {
    main
} = require('./main.js');

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
 *  handles calling the main function.
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
        await main('./correct_screenshots');
    } catch (error) {
        handleError(error);
    }
}

start();