function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return resultConversion === "as-number"
    ? parseFloat(result)
    : result.toString();
}

const combinedAges = combine(30, 27, "as-number");
console.log(combinedAges);

const combinedNames = combine("Pesho", "Anna", "as-string");
console.log(combinedNames);

const combinedStringAges = combine("30", "27", "as-number");
console.log(combinedStringAges);
