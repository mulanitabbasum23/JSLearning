console.log(`--------------------- Step 1---------------------`);
function vowelCount(str){
    let count = 0;
    let i = 0;
    let result = "  ";
    while (i < str.length) {
        
        let char = str.charAt(i);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
                result = result.concat(char).concat(" ,");
                count = count + 1;
        }
        i++;
    }
    console.log(`Vowels are : ${result}`);  
    console.log(`Total number of vowels in given string are: ${count}`);
}
vowelCount("I am very good UI Developer");
console.log(`--------------------- Step 2---------------------`);
function sumOfCube(){
    let totalSum =0;
    for (let index = 1; index <= 5; index++) {
       let cube = index * index * index;
       totalSum = totalSum  + cube;
    }
    console.log(`Sum of cube of numbers from 1 to 5 is : ${totalSum}`);
}
sumOfCube();
console.log(`--------------------- Step 3 ---------------------`);
function oddPositionedChar(str){
     let result = " ";
    for (let index = 0; index < str.length; index++) {
      const char = str.charAt(index);
      if (index%2!=0 && char!=' ') {
        result = result.concat(char).concat(" , ");
      }
    }
    console.log(`Odd positioned characters is : ${result}`);
}
oddPositionedChar("Hard work always pays back");
console.log(`------------------ string 2----------------`);
oddPositionedChar("Soon I will be Angular IT Champ");