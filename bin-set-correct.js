const {
    main
} = require('./main.js');

function handleError(error) {
    console.error(error);
    return;
}

async function start() {
    try {
        await main('./correct_screenshots');
    } catch (error) {
        handleError(error);
    }
}

start();