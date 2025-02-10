
//4 масиви, по 1 на кожен базовий тип (рядок, число, boolean, any), та виконання операцій (forEach() та map()).

const stringArray = ["pineapple", "strawberry", "watermelon"];
console.log("String Array:");
stringArray.forEach(item => console.log(item));

const numberArray = [1, 2, 3, 4, 5];
console.log("Number Array:");
numberArray.forEach(item => console.log(item));

const booleanArray = [true, false, true, false];
console.log("Boolean Array:");
booleanArray.forEach(item => console.log(item));

const mixedArray = ["hello", 42, true, null, undefined];
console.log("Mixed Array:");
mixedArray.forEach(item => console.log(item));


const uppercaseStrings = stringArray.map(item => item.toUpperCase());
console.log("Uppercase Strings:", uppercaseStrings);

const doubledNumbers = numberArray.map(item => item * 2);
console.log("Doubled Numbers:", doubledNumbers);

const negatedBooleans = booleanArray.map(item => !item);
console.log("Negated Booleans:", negatedBooleans);

const transformedMixed = mixedArray.map(item => typeof item);
console.log("Transformed Mixed Types:", transformedMixed);

