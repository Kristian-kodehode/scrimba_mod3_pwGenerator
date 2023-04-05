let person = {
  userName: "Kristian",
  userAge: 40,
  userGender: "Male",
  userInterests: ["music", "design", "tv shows", "gaming"],
};

function logPerson(person) {
  console.log("Name: " + person.userName);
  console.log("Age: " + person.userAge);
  console.log("Gender: " + person.userGender);
  console.log("Interests: " + person.userInterests);
}

logPerson(person);
