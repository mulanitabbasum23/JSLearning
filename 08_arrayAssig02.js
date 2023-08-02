const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log(`-------------------- Step 1 ---------------------`);
console.log(`Total elements in given array list are: ${arrayNumbers.length}`);
console.log(`-------------------- Step 2 ---------------------`);
console.log(`First element in given array list is: ${arrayNumbers[0]}`);
console.log(
  `Last element in given array list is: ${
    arrayNumbers[arrayNumbers.length - 1]
  }`
);
console.log(`-------------------- Step 3 ---------------------`);
console.log(
  `The 3rd last element in given array list is: ${
    arrayNumbers[arrayNumbers.length - 3]
  }`
);
console.log(`-------------------- Step 4 ---------------------`);
let merge = " ";
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    merge = merge.concat(element).concat(", ");
  }
}
console.log(`All even numbers in given array list are : ${merge}`);
console.log(`-------------------- Step 5 ---------------------`);
let result = " ";
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    result = result.concat(element).concat(", ");
  }
}
console.log(`All even numbers in given array list are : ${result}`);
console.log(`-------------------- Step 6 ---------------------`);
let res = [];
let sum = 0;
console.log(arrayNumbers);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 == 0) {
    res = res.concat(element);
  }
}
console.log(`Even positioned elements in given array list are: ${res}`);
for (let index = 0; index < res.length; index++) {
    const element = res[index];
    sum = sum + element;
  }
console.log(`The sum of even positioned elements in given array list is: ${sum}`);
console.log(`-------------------- Step 7 ---------------------`);
let res1 = [];
let sum1 = 0;
console.log(arrayNumbers);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 != 0) {
    res1 = res1.concat(element);
  }
}
console.log(`Odd positioned elements in given array list are: ${res1}`);
for (let index = 0; index < res1.length; index++) {
    const element = res1[index];
    sum1 = sum1 + element;
  }
console.log(`The sum of odd positioned elements in given array list is: ${sum1}`);
console.log(`-------------------- Step 8 ---------------------`);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumOfElements = sumOfElements + element
}
console.log(`The sum of all elements in given array list is: ${sumOfElements}`);
console.log(`-------------------- Step 9 ---------------------`);
let result1 = (" ");
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        result1 = result1.concat(element).concat(", ");
    }
    
}
console.log(`The numbers which are multiple of 5 are: ${result1}`);
console.log(`-------------------- Step 10 ---------------------`);
console.log(`Is number 115 available in given array list: ${arrayNumbers.includes(115)}`);
console.log(`-------------------- Step 11 ---------------------`);
console.log(`Is number 23 available in given array list: ${arrayNumbers.includes(23)}`);
console.log(`-------------------- Step 12 ---------------------`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`-------------------- Step 13 ---------------------`);
console.log(arrayNumbers);
let elementRemoved = arrayNumbers.splice(4,3)
console.log(arrayNumbers);
console.log(elementRemoved);

