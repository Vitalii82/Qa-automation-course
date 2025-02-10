// Функція для арифметичного додавання елементів масиву
function sumArray(arr) {
    // Перевірка, чи масив містить лише числа
    if (arr.every(item => typeof item === 'number')) {
      return arr.reduce((acc, curr) => acc + curr, 0);
    } else {
      console.log("Масив містить не тільки числа!");
      return null;
    }
  }
  
  // Масиви для тестування
  const stringArray = ["1", "2", "3"];
  const numberArray = [1, 2, 3];
  
  // Преобразуємо рядковий масив в числовий
  const convertedStringArray = stringArray.map(item => parseFloat(item));
  
  // Викликаємо функцію для масивів
  console.log("Результат додавання масиву рядків:", sumArray(convertedStringArray));
  console.log("Результат додавання масиву чисел:", sumArray(numberArray));