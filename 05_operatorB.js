console.log(`------------------ Step 1 -----------------`);
var greaterNumber = function number(num1,num2){
    var result = num1 > num2 ? `${num1}` : `${num2}`;
    console.log(`The greatest number between ${num1} and ${num2} is : ${result}`);
} 
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`------------------ Step 2 -----------------`);
var isEvenOrOddNum = function evenOdd(num){
    var result = num % 2 == 0 ? true : false;
    console.log(`Is number ${num} is even : ${result}`);

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`------------------ Step 3 -----------------`);
var wordLength = function word(arg){
    var length = arg.length;
    var result = length % 2 == 0 ? "EVEN" : "ODD";
    console.log(`The length of ${arg} is : ${result}`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");