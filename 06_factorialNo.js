// 5! = 1 * 2 * 3 * 4 * 5

let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}
console.log(`Factorial of 5 is ${result}`);

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7
function factorial(num) {
    if (num === 0) {
       return 1; 
    } else {
       return num * factorial(num - 1);  
    }
 }
 var factorial = factorial(5);
 console.log(`Factorial of 5 using recursion is: ${factorial}`);

function factorialOf(number){
    let result = 1; // 3 
for (let index = 1; index <= number; index++) {
    result = result * index;
}
console.log(`Factorial of ${number} is: ${result}`);
}
console.log(`------- Assignment - Factorial of numbers 5,9,11,7 ------`);
factorialOf(5);
factorialOf(9);
factorialOf(11);
factorialOf(7);