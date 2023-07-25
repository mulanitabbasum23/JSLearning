console.log(`============Assignment 01==============`);
function stringBasics(){
    console.log(`My dream company is "Google"`);
    var myHobby1 = 'Cooking';
    var myHobby2 = '  Reading Books';
    var myHobby3 = '  Listening to music';
    var myHobbies = myHobby1.concat(myHobby2,myHobby3);
    console.log(`My hobbies are: ${myHobbies}`);
    var result = myHobbies.length;
    console.log(`Sum of total number of characters in hobby are: ${result}`);
}
stringBasics()

console.log(`============Assignment 02==============`);
var str = "      Hey you are doing good,keep it up      ";
function stingHandsOn() {
  console.log(`----------------Step1--------------------`);
  console.log(`${str}`);
  console.log(`----------------Step2--------------------`);
  var result = str.length;
  console.log(`Length of given string is: ${result}`);
  console.log(`----------------Step3--------------------`);
  var trim = str.trim();
  console.log(`Before trim string length is : ${str.length}, After trim string is " ${trim } and it's length is: ${trim .length}` );

  console.log(`----------------Step4--------------------`);
  var trimLength = trim.length;
  var extraSpaces = str.length - trimLength;
  console.log(`Total number of extra spaces are: ${extraSpaces}`);
  console.log(`----------------Step5--------------------`);
  var afterTrimChar0 = trim.charAt(0);
  var afterTrimLastChar = trim.charAt(trim.length-1);
  console.log(`After trim first character is: ${afterTrimChar0}`,`   After trim last character is: ${afterTrimLastChar}`);

  console.log(`----------------Step6--------------------`);
  var result = trim.split(' ');
  var words = result.length;
  console.log(`Total number of words are : ${words}`);

  console.log(`----------------Step7--------------------`);
  var result = trim.indexOf('good');
  console.log(`The index of "good" is: ${result}`);

  console.log(`----------------Step8--------------------`);
  var result = trim.slice(22);
  console.log(`Substring starting from index 22 is: ${result}`);

  console.log(`----------------Step9--------------------`);
  var result = trim.endsWith("up");
  console.log(`Is the string end with word "up" : ${result}`);

  console.log(`----------------Step10--------------------`);
  var result = trim.startsWith("Hey");
  console.log(`Is the string starts with word "Hey": ${result}`);

}
stingHandsOn();
