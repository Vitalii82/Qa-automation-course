
function sumNumber(){
    let sumNumbers = num1 + num2; 
    console.log("Сума чисел:", sumNumbers);
}

function diffNumbers(){
    let diffNumbers = num1 - num2;  
    console.log("Різниця чисел:", diffNumbers);
}

function product(){
    let product = num1 * num2; 
    console.log("Добуток чисел:", product);
}

function quotient(){
    let quotient = num1 / num2; 
    console.log("Частка чисел:", quotient);
}
  
function sumStrAndNum(){
    let sumStrAndNum = str1 + num1;
    console.log("Конкатенація рядка і числа:", sumStrAndNum);
}

function numStrDivision(){
    let numStrDivision = str1 / num2; 
    console.log("Результат ділення рядка на число:", numStrDivision);
}

const num1 = 10;             
const num2 = 5;             
const str1 = "20";          
const str2 = "30";  

sumNumber();
diffNumbers();
product();
quotient();
sumStrAndNum();
numStrDivision();

