console.log(`--------------------- Step 1 ---------------------`);
function evenOrOdd(n1){
 if (n1 % 2 == 0) {
    console.log(`Given number ${n1} is even`);
 } else {
    console.log(`Given number ${n1} is odd`);
 }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);
console.log(`--------------------- Step 2 ---------------------`);
var str = 'JavaScript - ES6';
var length = str.length
console.log(`Given string is : ${str}`);
if (length>=10) {
    console.log(`Given string contains ${length} characters and which are more than 10 `);
} else {
    console.log(`Given string not contains more than 10 characters`);
}
console.log(`--------------------- Step 3 ---------------------`);
var str = 'JavaScript Language';
if (str.startsWith('Java')) {
    console.log(`Given string starts with "Java"`);
    
}
