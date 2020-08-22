const person = {
  name: "Pesho",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favouriteActivities: any[];
favouriteActivities = ["Esports", 9];

console.log(favouriteActivities);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
