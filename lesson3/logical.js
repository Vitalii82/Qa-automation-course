
function comparisonOperations(a, b) {
    console.log("Операції порівняння:");
    console.log(`a == b: ${a == b}`);
    console.log(`a != b: ${a != b}`);
    console.log(`a > b: ${a > b}`);
    console.log(`a <= b: ${a <= b}`);
}


function logicalOperations(a, b) {
    console.log("Логічні операції:");
    console.log(`a > 5 && b > 15: ${(a > 5 && b > 15)}`);
    console.log(`a > 5 || b < 10: ${(a > 5 || b < 10)}`);
    console.log(`!(a == b): ${!(a == b)}`);
}


let a = 10;
let b = 20;

comparisonOperations(a, b);
logicalOperations(a, b);
