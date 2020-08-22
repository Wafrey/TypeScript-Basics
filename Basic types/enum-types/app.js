var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Pesho",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = ["Esports"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log("He can do what he want xD");
}
