result = 0 == ' ';
console.log(result);
console.log(`Result is 'true' because thier is implicit conversion of string to the number`);
console.log(`-----------------------------------------------------------`);
result = 0 == '0';
console.log(result);
console.log(`Result is 'true' because thier is implicit conversion of string to the number`);
console.log(`-----------------------------------------------------------`);
result = 0 == false;
console.log(result);
console.log(`Result is 'true' because thier is implicit conversion of boolean to the number and false is nothing but 0`);
console.log(`-----------------------------------------------------------`);
result = null == undefined;
console.log(result);
console.log(`Result is 'true' because thier implicit conversion of undefined into null`);
console.log(`-----------------------------------------------------------`);
result = 1 == [1];
console.log(result);
console.log(`Result is 'true' because thier is implicit conversion of array value to the number`);
console.log(`-----------------------------------------------------------`);
result = 1 == true;
console.log(result);
console.log(`Result is 'true' because thier is implicit conversion of boolean to the number and true is nothing but 1`);
console.log(`-----------------------------------------------------------`);
result = 1 == '1';
console.log(result);
console.log(`Result is 'true' because thier is implicit conversion of string to the number`);
console.log(`-----------------------------------------------------------`);