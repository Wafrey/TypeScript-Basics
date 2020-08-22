function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return resultConversion === "as-number"
        ? parseFloat(result)
        : result.toString();
}
var combinedAges = combine(30, 27, "as-number");
console.log(combinedAges);
var combinedNames = combine("Pesho", "Anna", "as-string");
console.log(combinedNames);
var combinedStringAges = combine("30", "27", "as-number");
console.log(combinedStringAges);
