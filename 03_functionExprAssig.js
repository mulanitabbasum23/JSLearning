console.log(`---------------- Step 1 -------------------`);
var square = function(num){
    var result = num * num;
    console.log(`Square of ${num} is: ${result}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`---------------- Step 2 -------------------`);
var result = typeof square;
console.log(`Type of given function is: ${result} `);

console.log(`---------------- Step 3 -------------------`);
var area = function (length,width){
    var result = length * width;
    console.log(`Area of rectangle pot having length ${length} & width ${width} is:  ${result}`);
}
area(499,917);
console.log(`---------------- Step 4 -------------------`);
 var swap = function swap(value1, value2){
    console.log('Before Swap=> value1 =', value1, "  value2 =", value2 );
    var temp = value1;
    value1= value2;
    value2 = temp;
    console.log('After Swap=>value1 =', value1, "   value2 =", value2 );
}
swap("Mahi","Raina");
swap(55,77);

console.log(`---------------- Step 5 -------------------`);
var string = function(str){
    var result = str.length;
    console.log(`Total number of characters in given string are : ${result}`);
    var charAt6 = str.charAt(6);
    console.log(`Character at index 6 is : "${charAt6}"`);
    var charAt11 = str.charAt(11);
    console.log(`Character at index 6 is : "${charAt11}"`);
    var result = str.charAt(str.length-1);
    console.log(`Last character of given string is : "${result}"`);
    var result = str.charAt(0);
    console.log(`Very first character of given string is : "${result}"`);
    var result = str.charAt(str.length-3);
    console.log(`The third last character of given string is : "${result}"`);
    var words = str
    .split(" ");
    var res = words.length;
    var result = res * res;
    console.log(`Total number of words in given string are '${res}' & square of this is : '${result} `);


}
string("JS is the most popular language of internet");
