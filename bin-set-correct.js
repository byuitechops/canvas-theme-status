#!/usr/bin/env node

const path = require('path');
const {
    main
} = require(path.join(__dirname, '/main.js'));

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
        await main(path.join(__dirname, '/correct_screenshots'));
    } catch (error) {
        handleError(error);
    }
}

start();