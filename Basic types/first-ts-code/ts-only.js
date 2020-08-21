var btn = document.querySelector("button");
var firstInput = document.getElementById("num1");
var secondInput = document.getElementById("num2");
function addNumbers(firstInput, secondInput) {
    return firstInput + secondInput;
}
btn.addEventListener("click", function () {
    console.log(addNumbers(+firstInput.value, +secondInput.value));
    console.log('kur');
});
