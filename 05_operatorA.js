console.log(`-------------------- Step 1 -------------------`);
function squareOfWordLength(str){
    var length = str.length;
    console.log(`The length of '${str}' is : ${length}`);
    var result = length * length;
    return result;
}
var square = squareOfWordLength("JavaScript");
console.log(`The square of length of 'JavaScript' is : ${square}`);
var square = squareOfWordLength("Google Chrome");
console.log(`The square of length of 'Google Chrome' is : ${square}`);
var square = squareOfWordLength("Developer Smart");
console.log(`The square of length of 'Developer Smart' is : ${square}`);
console.log(`-------------------- Step 2 -------------------`);
var stringLength = function string(){
    var str = "I am Angular Developer"
    var length = str.length;
    console.log(`The length of given string is : ${length}`);
    var words = str.split(" ");
    var res = words.length;
    console.log(`The total number of word in given string are : ${res}`);
    var result = length / res;
    console.log(`The division of string length and number of words is : ${result}`);
    var result = length * res;
    console.log(`The multiplication of string length and number of words is : ${result}`);
}
stringLength();
