const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);
console.log(`------------------------- Step 1 -----------------------`);
let firstElement = arrayFruits[0];
let lastElement = arrayFruits[arrayFruits.length-1];
console.log(`The first element in the array is "${firstElement}" and the last element is "${lastElement}"`);
console.log(`------------------------- Step 2 -----------------------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`------------------------- Step 3 -----------------------`);
let removedElement = arrayFruits.splice(4,1)
console.log(arrayFruits);
console.log(`Removed element is: "${removedElement}"`);
console.log(`------------------------- Step 4 -----------------------`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(`------------------------- Step 5 -----------------------`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);
console.log(`------------------------- Step 6 -----------------------`);
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);
console.log(`------------------------- Step 7 -----------------------`);
let merge = " ";
for (let index = 1; index <= 4; index++) {
    const element = arrayFruits[index];
    merge = merge.concat(element).concat(", ");
}
console.log(`Elements starting from index 1 to 4 are: "${merge}"`);
console.log(`------------------------- Step 8 -----------------------`);
let result = " ";
for (let index = arrayFruits.length-3; index < arrayFruits.length; index++) {
    const element = arrayFruits[index];
    result = result.concat(element).concat(", ");
}
console.log(`Last 3 elements in given array list are: "${result}"`);