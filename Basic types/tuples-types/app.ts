const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Pesho",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// we push string to second index but TS can't handle with push for the Tuples
person.role.push("admin");
person.role[1] = 'peadall';

let favouriteActivities: string[];
favouriteActivities = ["Esports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
