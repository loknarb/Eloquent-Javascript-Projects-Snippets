function sendMessageWithConsoleLog(message) {
    return console.log(message);
}

function sendMessageWithAlert(message) {
    return alert(message);
}

function promptWithMessage(message) {
    return prompt(message);
}

function confirmWithMessage(message) {
    return confirm(message);
}
function sendMessageWithFromCallback(message) {
    return console.log(message + " from a callback function!");
}
