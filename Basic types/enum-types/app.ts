enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Pesho",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favouriteActivities: string[];
favouriteActivities = ["Esports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("He can do what he want xD");
}
