var greet = "Good Morning Virat Dude";
var lengthGreet = greet.length;
console.log(greet,'Length of string is:',lengthGreet );

console.log('------------------------------------------');
var charAt0 = greet.charAt(0);
console.log(`${greet}- Char at 0th index is ${charAt0}`);

var charAtLastIndex = greet.charAt(lengthGreet-1);
console.log(`Last char is ${charAtLastIndex} of index is ${lengthGreet}`);
console.log('------------------------------------------');


var firstName = 'Tabbasum';
var lastName = 'Mulani';
var fullName = firstName + lastName;
console.log(`Concatenation string is ${fullName}`);
var result = firstName.concat(lastName);
console.log(`My full name is: ${result}`);
console.log('------------------------------------------');


var result = greet.indexOf(`M`);
console.log(`Index of char 'M' is ${result}`);
var result = greet.indexOf('Dude');
console.log(`Index of sub string 'Dude' is: ${result}`);
console.log('------------------------------------------');


var result = greet.includes("Virat");
console.log(`Result is ${result}`);
console.log('------------------------------------------');


var result = greet.split('');
var words = result.length;
console.log(`Total number of words are : ${words}`);
console.log('------------------------------------------');

var greet = "    Good Morning    ";
var result = greet.trim();
console.log(`Before trim string length is : ${greet.length}, After trim string is " ${result} and it's length is: ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length;
var endSpaces = greet.length - trimEndLength;
console.log(`End Spaces is : ${endSpaces}`);
console.log('------------------------------------------');


var greet = "Good Morning Virat Dude";
var result = greet.replace('','-');
console.log(`After replace '' with '-' string is : ${result}`);
var result = greet.replace('o','O');
console.log(`Result string is: ${result}`);
console.log('------------------------------------------');

var result = greet.slice(5,12);
console.log(`Slice from index 5 till 12 is: ${result}`);
