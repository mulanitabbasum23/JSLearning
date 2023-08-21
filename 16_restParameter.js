function add(num1, num2, ...num ){
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        sum = sum + element;
    }
    // console.log(sum);
    let sumOfAllelements = num1 + num2 + sum;
    console.log(`Addition of ${num1}, ${num2}, ${num} is = ${sumOfAllelements}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);