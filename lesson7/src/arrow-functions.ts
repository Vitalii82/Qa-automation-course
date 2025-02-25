const sumArray = (arr: (number | string)[]): number => {
  let sum = 0;

  for (let element of arr) {
    if (typeof element === 'number') {
      sum += element;  
    } else if (typeof element === 'string') {
      const num = parseFloat(element);
      if (!isNaN(num)) {
        sum += num;  
      }
    }
  }

  return sum;
};

const stringArray = ['7', '8', '9'];
const numberArray = [10, 11, 12];

console.log('Сума елементів масиву stringArray:', sumArray(stringArray)); 
console.log('Сума елементів масиву numberArray:', sumArray(numberArray)); 

const mixedArray = [1, '2', '3.5', 4, '5'];
console.log('Фільтрована сума (mixedArray):', sumArray(mixedArray)); 
