

const sumArrayArrow = (arr) => {
    if (arr.every(item => typeof item === 'number')) {
      return arr.reduce((acc, curr) => acc + curr, 0);
    } else {
      console.log("Масив містить не тільки числа!");
      return null;
    }
  };
  

  const stringArrayArrow = ["1", "2", "3"];
  const numberArrayArrow = [1, 2, 3];
  
 
  const convertedStringArrayArrow = stringArrayArrow.map(item => parseFloat(item));


  console.log("Результат додавання масиву рядків (стрілкова функція):", sumArrayArrow(convertedStringArrayArrow));
  console.log("Результат додавання масиву чисел (стрілкова функція):", sumArrayArrow(numberArrayArrow));
  
  // Додаткові стрілкові функції:
  
  // Стрілкова функція без параметрів (повертає значення за замовчуванням)
  const greet = () => "Привіт, світ!";
  console.log(greet()); 
  
  // Стрілкова функція, яка приймає один параметр і повертає його значення, помножене на 2
  const double = (x) => x * 2;
  console.log("Подвоєне значення:", double(4)); 
  
  // 3. Функція працює з об'єктами (повертає новий об'єкт з помноженим значенням)
  const createPerson = (name, age) => ({ name, age });
  console.log(createPerson("Alice", 25)); 
  
  // Функція з множиною параметрів (для з'єднання імені та прізвища)
  const fullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;
  console.log(fullNameArrow("John", "Travolta")); 
  
  // Функція працює з масивом (збирає всі числа, більші за 2)
  const numbersGreaterThanTwo = [1, 2, 3, 4, 5].filter(num => num > 2);
  console.log("Числа більші за 2:", numbersGreaterThanTwo); 
  
  // Функція сортує масив за зростанням
  const sortedArray = [10, 2, 33, 4].sort((a, b) => a - b);
  console.log("Відсортований масив:", sortedArray); 
  
  //  Функція підраховує кількість букв у слові
  const countLetters = (word) => word.length;
  console.log("Кількість букв у слові 'JavaScript':", countLetters("JavaScript")); 
  
  // Функція використовує проміси (асинхронна функція)
  const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Дані отримано!"), 1000));
  
  fetchData().then(response => console.log(response)); 
  