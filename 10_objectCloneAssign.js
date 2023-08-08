let personalDetails = {
    name : "Tabbasum Mulani",
    age : 23,
    emailId : "mulanitabbasum23@gmail.com",
    mobile : 7387058325,
    city : "Bangalore"
}
let collegeDetails = {
    collegeName : "Fabtech Technical Campus, Sangola",
    degree : "BE",
    stream : "E&TC",
    paassoutyr : 2019
}
let mergedObject = Object.assign({},personalDetails,collegeDetails);
console.log(mergedObject);
console.log(`--------------------------------------------------`);
let myFriendsList = ["Prajakta","Pallavi","Renuka","Sayali"];
Object.freeze(myFriendsList);
let result = " ";
for (const element of myFriendsList) {
    result = result.concat(element).concat(", ");
} 
console.log(`My friends list is: ${result}`);
console.log(`--------------------------------------------------`);
let company = ["Codemind", "Technology"];
for (const element of company) {
    if (element == "Technology") {
       let str = element;
       let splitstr = str.split("");
       let reverseArray = splitstr.reverse();
       let joinArray = reverseArray.join("");
       console.log(`Reversed word is: ${joinArray}`);
    }
}

    


 




