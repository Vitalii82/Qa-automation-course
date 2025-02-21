
function sumArray1(arr: (number | string)[]): number {
  let sum = 0;

  arr.forEach(element => {
    if (typeof element === 'string') {
      const num = parseFloat(element);
      if (!isNaN(num)) {
        sum += num;
      }
    } else if (typeof element === 'number') {
      sum += element;
    }
  });
  
  return sum;
}

const stringArray1 = ['1', '2', '3'];
const numberArray1 = [4, 5, 6];

console.log('Сума елементів масиву stringArray:', sumArray1(stringArray1));
console.log('Сума елементів масиву numberArray:', sumArray1(numberArray1)); 
