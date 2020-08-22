var person = {
    name: "Pesho",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var favouriteActivities;
favouriteActivities = ["Esports", 9];
console.log(favouriteActivities);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
