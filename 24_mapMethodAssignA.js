const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`-------------------- Step 1 -----------------`);
const  arrayNew = arrayNumbers.map((element)=>{
    return element + 10;
}) ;
console.log(arrayNew);
console.log(`-------------------- Step 2 -----------------`);
const arrrayCube = arrayNumbers.map((element)=>{
    return element * element * element;
});
console.log(arrrayCube);
console.log(`-------------------- Step 3 -----------------`);
const arrayIndex = arrayNumbers.map((element,index)=>{
    return element + index;
});
console.log(arrayIndex);