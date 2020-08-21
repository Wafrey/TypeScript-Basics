const btn = document.querySelector("button");
const firstInput = document.getElementById("num1")! as HTMLInputElement;
const secondInput = document.getElementById("num2")! as HTMLInputElement;

function addNumbers(firstInput: number, secondInput: number) {
  return firstInput + secondInput;
}

btn.addEventListener("click", function () {
  console.log(addNumbers(+firstInput.value, +secondInput.value));
});
