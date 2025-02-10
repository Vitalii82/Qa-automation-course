
// Комплексний об'єкт
const person = {
    name: "Robin",
    age: 24,
    address: {
      city: "Edinburgh",
      country: "Scotland"
    },
    hobbies: ["hunting", "traveling", "fishing"],
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    displayHobbies: function() {
      console.log("My hobbies are:");
      this.hobbies.forEach(hobby => console.log(hobby));
    }
  };
  
  // Викликаємо методи об'єкта
  person.greet();
  person.displayHobbies();
  