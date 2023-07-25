var num = 100;
console.log(num);
var display = function(){
    console.log(`I am Angular Developer !`);
}
display();
console.log(typeof display);

console.log(`------------------------------------`);
var add = function(num1,num2){
    var result = num1 + num2;
    console.log(`Addition is: ${result}`);
}
add(20,30);

console.log(`------------------------------------`);
var wordCount = function(word){
    var words = word.split(" ");
    var wordCount = words.length;
    console.log(`In given string - ${word}`);
    return wordCount;

}
var result = wordCount("I am UI Developer");
console.log(`Total word count is: ${result}`);