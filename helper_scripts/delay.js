/************************************************
 *                    delay
 * 
 * Parameters:
 *  1. time: int
 * 
 * Description:
 *  The delay function's purpose is to allow the
 *  user to wait a specified amount of time.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function delay(time) {
    return new Promise(function (resolve) {
        // Resolve once the specified time has been waited
        setTimeout(resolve, time);
    });
}

module.exports = delay;