
function sumArray(arr: (number | string)[]): number {
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
  
  const stringArray = ['1', '2', '3'];
  const numberArray = [4, 5, 6];
  
  console.log(sumArray(stringArray)); 
  console.log(sumArray(numberArray));
  