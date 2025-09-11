// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";

// Display Properties
document.getElementById("demo").innerHTML = person.firstName + " and " + man.firstName;
console.log(person.firstName + man.firstName)
