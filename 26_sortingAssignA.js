let arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`----------------------- Step 1 --------------------`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log(`----------------------- Step 2 --------------------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`----------------------- Step 3 --------------------`);
arrayRollNumbers.sort((n1,n2)=> n1>n2 ? 1:-1)
console.log(arrayRollNumbers);
console.log(`----------------------- Step 4 --------------------`);
console.log(`Greatest number from given array is : ${arrayRollNumbers[arrayRollNumbers.length-1]}`);
console.log(`----------------------- Step 5 --------------------`);
console.log(`Smallest number from given array is: ${arrayRollNumbers[0]}`);
console.log(`----------------------- Step 6 --------------------`);
arrayRollNumbers = [...new Set(arrayRollNumbers)];
console.log(arrayRollNumbers);