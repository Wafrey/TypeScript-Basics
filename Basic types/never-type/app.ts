let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Pesho";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { msg: message, errorCode: code };
}

const result = generateError("An in server ocurred", 500);
console.log(result);
