
// Створення об'єкта з гетерами та сетерами
const person = {
    firstName: 'Jason',
    lastName: 'Statham',
    age: 57,
    
    // Геттер для повного імені
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    
    // Сеттер для віку
    set updateAge(newAge) {
      if (newAge > 0) {
        this.age = newAge;
      } else {
        console.log("Вік повинен бути додатним числом.");
      }
    },
    
    // Функція, що змінює ім'я та вік
    changeNameAndAge(newFirstName, newLastName, newAge) {
      this.firstName = newFirstName;
      this.lastName = newLastName;
      this.updateAge = newAge;
      return `Ім'я змінено на ${this.fullName}, вік на ${this.age}`;
    }
  };
  
  // Тестування гетерів, сеттерів та функції об'єкта
  console.log("Повне ім'я (геттер):", person.fullName); 
  person.updateAge = 57; 
  console.log("Новий вік після сеттера:", person.age); 
  console.log(person.changeNameAndAge('Dua', 'Lipa', 29)); 
  console.log("Нове ім'я (геттер):", person.fullName); 
  console.log("Новий вік після сеттера:", person.age); 
  