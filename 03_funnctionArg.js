//Function with no argumennt and returnn value
function show(){
    console.log('My nname is Tabbasum');
    console.log('I am Engineering graduate');
    console.log('My tech skils are - HTML + CSS + JavaScript');
}
show();//Function call
console.log('--------------------------------');
//Function with argument and no return value
function checkType(value){
    console.log('Value is:',value);
    console.log('Type is:',typeof value);
    console.log('--------------------------------');
}
checkType(100);
checkType('TM');
checkType(true);
checkType(undefined);
checkType(null);
checkType();

console.log('--------------------------------');

//Function with argument and return value
function addition(arg1,arg2,arg3){
    console.log('Values are: ',arg1,arg2,arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10,23,89);
console.log('Result is: ',res);
var resultValue = addition(-67,234,556);
console.log("Result is: ",resultValue);
var result = addition('TM','Bangalore',97);
console.log('Result is:',result);