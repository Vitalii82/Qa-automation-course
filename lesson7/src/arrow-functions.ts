
const sumArrayArrow = (arr: (number | string)[]): number => {
    return arr.reduce((sum, element) => {
      if (typeof element === 'string') {
        const num = parseFloat(element);
        if (!isNaN(num)) {
          return sum + num;
        }
      } else if (typeof element === 'number') {
        return sum + element;
      }
      return sum;
    }, 0);
  };
  
  const stringArray = ['7', '8', '9'];
  const numberArray = [10, 11, 12];
 
  console.log('Сума елементів масиву stringArray:', sumArrayArrow(stringArray)); 
  console.log('Сума елементів масиву numberArray:', sumArrayArrow(numberArray)); 
 
  const mixedArray = [1, '2', '3.5', 4, '5'];
  const filteredSum = mixedArray
    .map((element) => parseFloat(element as string)) 
    .filter((num) => !isNaN(num)) 
    .reduce((sum, num) => sum + num, 0); 
  console.log('Фільтрована сума (mixedArray):', filteredSum); 
  