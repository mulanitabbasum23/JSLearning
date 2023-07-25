// Addition
console.log(`---------- Addition-----------`);
var num1 = 56;
var num2 = 45;
var result = num1 + num2;
console.log(`Addition is : ${result}`);

//Subtraction
console.log(`---------- Subtraction -----------`);
var result = num1 - num2;
console.log(`Subtraction is: ${result}`);

// Multiplication
console.log(`---------- Multiplication -----------`);
var num1 = 9;
var num2 = 5;
var result = num1 * num2;
console.log(`Multiplication is: ${result}`);

console.log(`---------- Exponential -----------`);
var num1 = 10;
var num2 = 3;
var result = num1 ** num2;
console.log(`Result is: ${result}`);

console.log(`---------- Division -----------`);
var result = num1 / num2;
console.log(`Division is: ${result}`);

console.log(`---------- Modulus -----------`);
var result = num1 % num2;
console.log(`Result is: ${result}`);
console.log(`${15%3}`);
console.log(`${12%2}`);

console.log(`---------- Assignment -----------`);
var num1 = 10;
num1 += 5; // num1 + 5; num1 = 15
console.log(`Result is : ${num1}`);
num1 -= 5;
console.log(`Result is : ${num1}`);
num1 *= 5;
console.log(`Result is: ${num1}`);

console.log(`---------- Comparison -----------`);
var num1 = 20;
var num2 = '20';
var result = num1 == num2;
console.log(`Result is : ${result}`);
console.log(`Comparison == : ${47=='47'}`);
console.log(`Comparison == : ${74=='47'}`);

var result = num1 === num2;
console.log(`Result is : ${result}`);
console.log(`Comparison == : ${47==='47'}`);
console.log(`Comparison == : ${'47'==='47'}`);

var result = num1 != num2;
console.log(`Using != result is : ${result}`);

var result = num1 !== num2;
console.log(`Using !== result is : ${result}`);

var num3 = 30;
var num4 = 29;
var result = num3 < num4;
console.log(`Using < operator result is: ${result}`);

var result = num3 > num4;
console.log(`Using > operator result is: ${result}`);

var num5 = 30;
var result = num3 <= num5;
console.log(`Using <= operator result is : ${result}`);

var num5 = 30;
var result = num3 >= num5;
console.log(`Using >= operator result is : ${result}`);

