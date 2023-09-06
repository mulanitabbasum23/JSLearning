const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const arrayNew = arrayNumbers.filter((element)=>{
    return element > 50;
});
console.log(`----------------------- Step 1 -------------------`);
console.log(arrayNew);
const arrayEven = arrayNumbers.filter((element)=>{
    return element % 2 == 0;
});
console.log(`----------------------- Step 2 -------------------`);
console.log(arrayEven);
const arrayOdd = arrayNumbers.filter((element)=>{
    return element % 2 != 0;
});
console.log(`----------------------- Step 3 -------------------`);
console.log(arrayOdd);
const arrayMultiple = arrayNumbers.filter((element)=>{
    return element % 5 == 0;
});
console.log(`----------------------- Step 4 -------------------`);
console.log(arrayMultiple);
const array = arrayNumbers.filter((element)=>{
    return element > 20 && element < 50;
});
console.log(`----------------------- Step 5 -------------------`);
console.log(array);