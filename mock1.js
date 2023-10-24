// let arrayGirls = ["Renuka","Sayali","Shweta","Tabbasum"];

// for (let index = arrayGirls.length - 1; index >= 0; index--) {
//     const element = arrayGirls[index];
//     console.log(element);
    
// }
// let arrayGirls = ["Renuka","Sayali", "Jenny","Shweta","Tabbasum"];
// for (let index = arrayGirls.length - 1; index >= 0; index--) {
//         const element = arrayGirls[index];
//         console.log(element);
    
// }
let str = "Shweta Deshmukh"
let count = 0;
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element == 'e') {
        count ++;

    } 
}
console.log(`Total number of 'e 'in given string: ${count}`);

let arrayGirls = ["Renuka","Sayali", "Jenny","Shweta","Tabbasum"];
let count1 = 0;
for (const element of arrayGirls) {
    for (let index = 0; index < element.length; index++) {
        const element1 = element[index];
        if (element1 == 'a') {
                count1 ++;
            }
    }
}
console.log(`Total number of 'a' in given array: ${count1}`);
