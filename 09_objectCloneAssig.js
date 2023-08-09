const arrayNums = [20,3,4,56,90,400,49];
let clonedArray = arrayNums;
clonedArray.push(55,66);
console.log(`--------------------- Step 1 ---------------------`);
console.log(`Original array is: [${arrayNums}]`);
console.log(`Cloned array is: [${clonedArray}]`);
console.log(`--------------------- Step 2 ---------------------`);
let deepClonedArray = [...arrayNums];
arrayNums.push(10,25);
console.log(`Original array is: [${arrayNums}]`);
console.log(`Array after deep cloning: [${deepClonedArray}]`);
console.log(`--------------------- Step 3 ---------------------`);
let arrayEven = [2,30,14,8];
let mergedArray = [...arrayEven,...arrayNums];
console.log(`Merged array is: [${mergedArray}`);
const employeeInfo = {
    empId : 27,
    empName : "John Doe",
    salary: {
        julyMonth : "40,0000INR",
        augMonth : "50,0000INR",
        junMonth : "65,0000INR"
    },
    address: {
        locality: {
            colony : "Om Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
     show : function() {
        console.log(`Address of employee is: ${this.address.locality.colony}, ${this.address.locality.street}, ${this.address.city}, ${this.address.state}, ${this.address.country}`);
    },
    mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(`--------------------- Step 5 ---------------------`);
employeeInfo.show();
console.log(`Mobile numbers of employee are: ${employeeInfo.mobiles}`);
console.log(`--------------------- Step 6 ---------------------`);
let clonedObject = JSON.parse(JSON.stringify(employeeInfo));
console.log(`Updated salary of cloned object is: ${clonedObject.salary.julyMonth = "80K"}`);
let updatedCountry = employeeInfo.address.country = "United Kingdom";
console.log(`Updated value of country of original object is: ${updatedCountry}`);
