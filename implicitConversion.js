console.log(`=========== Implicit number conversion to String ============`); 
// Numeric string used with + gives string type

result = '3' + 2;
console.log(result);
console.log(`Result is 32 because thier is implicit conversion from number value '2' to string`);
console.log(`-----------------------------------------------------`);
result = '3' + true;
console.log(result);
console.log(`Result is 3true because thier is implicit conversion from boolean value true to string 'true'`);
console.log(`-----------------------------------------------------`);
result = '3' + undefined;
console.log(result);
console.log(`Result is 3undefined because thier is implicit conversion from undefined value to string 'undefined'`);
console.log(`-----------------------------------------------------`);
result = '3' + null;
console.log(result);
console.log(`Result is 3null because thier is implicit conversion from nullvalue to string 'null'`);
console.log(`=========== Implicit string conversion to number ==========`); 
//numeric string used with -, /, * results nnumber type
result = '4' - '2';
console.log(result);
console.log(`Result is 2 because thier is implicit conversion from string to number `);
console.log(`-----------------------------------------------------`);
result = '4' - 2;
console.log(result);
console.log(`Result is 2 because thier is implicit conversion from string(4) to number `);
console.log(`-----------------------------------------------------`);
result = '4' * 2;
console.log(result);
console.log(`Result is 8 because thier is implicit conversion from string(4) to number `);
console.log(`-----------------------------------------------------`);
result = '4' / 2;
console.log(result);
console.log(`Result is 2 because thier is implicit conversion from string(4) to number `);
console.log(`=========== Implicit boolean conversion to number ==========`); 
// If boolean is used, true is 1, false is 0
result = '4' - true;
console.log(result);
console.log(`Result is 3 because thier is implicit conversion of string(4) to number and value of true is taken as 1`);
console.log(`---------------------------------------------------------`);
result = 4 + true;
console.log(result);
console.log(`Result is 5 because thier is implicit conversion of boolean to number and value of true is taken as 1`);
console.log(`---------------------------------------------------------`);
result = 4 + false;
console.log(result);
console.log(`Result is 4 because thier is implicit conversion of boolean to number and value of false is taken as 0`);
 