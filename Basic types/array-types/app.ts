const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Pesho",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favouriteActivities: string[];
favouriteActivities = ["Esports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
