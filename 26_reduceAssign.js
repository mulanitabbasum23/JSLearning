const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`---------------------- Step 1 ----------------------`);
console.log(`------ Sum of all numbers usinng traditional way ------`);
let sum = 0;
for (const element of arrayNumbers) {
    sum = sum + element;
}
console.log(`Sum of all numbers in given array is: ${sum}`);
console.log(`------ Sum of all numbers usinng reduce method ------`);
const sumOfNumbers = arrayNumbers.reduce((runnigTotal,element)=>{
    return runnigTotal + element;
});
console.log(`Sum of all numbers in given array: ${sumOfNumbers}`);
console.log(`---------------------- Step 2 ----------------------`);
const numbersMultipleOf5 = arrayNumbers.filter(element=>{
    return element % 5 == 0;
})
const totalSum = numbersMultipleOf5.reduce((runnigTotal,element)=>{
    return runnigTotal + element;
});
console.log(`Sum of numbers which are mulptiple of 5 is: ${totalSum}`);
