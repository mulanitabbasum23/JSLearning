function reverseString(str){
    let reverse = " ";
    for (let index = str.length-1; index >= 0; index--) {
        const char = str.charAt(index);
        reverse = reverse.concat(char)
        
    }
    console.log(`The reverse string is : ${reverse}`);
}
reverseString("Hard work always pays back");
console.log(`----------------------- String 2---------------------`);
reverseString("Soon I will be Angular IT Champ")