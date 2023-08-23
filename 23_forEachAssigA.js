const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-------------------- Step 1 --------------------`);
arrayNumbers.forEach((currentValue,index)=>{
    console.log(`Element is: ${currentValue} & it's index is: ${index}`);
});
console.log(`-------------------- Step 2 --------------------`);
console.log(`Positive Numbers are:`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue > 0) {
        console.log(`${currentValue}`);
    }
});
console.log(`-------------------- Step 3 --------------------`);
let arrayFun = ()=>{
    let newArray = [];
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element <0) {
            newArray.push(element)
        }
    }
    console.log(`Array of negative numbers is:`);
    console.log(newArray);
}
arrayFun(); 
console.log(`-------------------- Step 4 --------------------`);
console.log(`Even numbers are:`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
    }
});
console.log(`-------------------- Step 5 --------------------`);
let sum = 0;
arrayNumbers.forEach((currentValue)=>{
    sum = sum + currentValue;
}); 
console.log(`Sum of all elements from arrayNumbers is : ${sum}`);
console.log(`-------------------- Step 6 --------------------`);
console.log(`Even indexed array values are:`);
arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0) {
        console.log(currentValue);
    }
});