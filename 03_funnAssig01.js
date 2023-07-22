console.log('-----Step 1:Function with no argument and no return type-----');
function show(){
    console.log('I am learning JavaScript');
}
show();
console.log('--------------');
function show1(){
    console.log('I love JavaScript');
}
show1();

console.log('-----Step2:Function with argument-----');
function personalDetails(firstName,lastName,collegeName){
    console.log('My first name is: ',firstName);
    console.log('My last name is: ',lastName);
    console.log('My college name is: ',collegeName);
}
personalDetails('Tabbasum','Mulani','FTCSangola');

console.log('------Step3:Swapping the value-----');
function swap(value1, value2){
    console.log('Before Swap=> value1 =', value1, "value2", value2 );
    var temp = value1;
    value1= value2;
    value2 = temp;
    console.log('After Swap=>value1', value1, " value2", value2 );
}
swap('Virat','Anushka');
console.log('---------------------');
swap(1000,2000);

console.log('-----Step4:Addition of three arguments------');
function addThreeValues(val1,val2,val3){
    console.log('Values are :',val1,val2,val3);
    var result = val1 + val2 +val3;
    return result;
}
var res = addThreeValues(10.23,600,40);
console.log('Result is = ',res);
console.log('                      ');
var res = addThreeValues("Hello","Good","Morning");
console.log('Result is = ',res);

console.log('-------Step5: Bank Details--------');
function bankDetails(bankName,accountNum,location,pinCode){
    console.log('Bank name is : ',bankName,'  Account number is : ',accountNum,'   Location is : ',location,'   Pin Code is : ',pinCode);
}
bankDetails('CITI Bank', 3456782345,'Pune',431202);
bankDetails('Axis Bank',7856782345,'Mumbai',441202);
bankDetails('HDFC Bank',895672345,'Pune',631202,'Open');
