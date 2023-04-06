const person = {
  userName: "Kristian",
  userAge: 40,
  userHobbies: ["design", "music", "gaming"],
};

function printPerson(person) {
  console.log("Name: " + person.userName);
  console.log("Age: " + person.userAge);
  console.log("Hobbies: " + person.userHobbies[0]);
}
printPerson(person);
