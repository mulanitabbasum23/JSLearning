let greetFun = ()=>{
    console.log(`"Good Morning, Today is Tuesday"`);
}
console.log(`--------------------- Step 1 -------------------`);
greetFun();
console.log(`--------------------- Step 2 -------------------`);
let multiplication = (n1,n2,n3=1)=>{
    console.log(`Multiplication of ${n1},${n2} & ${n3} is: ${n1*n2*n3}`);
}
multiplication(5,5,2);
multiplication(10,4);
console.log(`--------------------- Step 3 -------------------`);
let addition = (n1,n2,n3,n4,n5)=>{
    return n1+n2+n3+n4+n5;
}
let sum = addition(100,100,200,349,756);
console.log(`Addition of given numbers is: ${sum}`);
let sum1 = addition("I am"," learning"," ES6"," features"," in depth.");
console.log(`Concatenation of given string is: ${sum1}`);