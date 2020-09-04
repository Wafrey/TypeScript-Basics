var userInput;
var userName;
userInput = 5;
userInput = "Pesho";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An in server ocurred", 500);
