let employeeInfoStr = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : "false",
    "address" : {
        "street" : "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Austrilia"
    },
    "referred by" : "E0012"
}`;
const employeeInfo = JSON.parse(employeeInfoStr);
const employeeRole = employeeInfo.role;
console.log(`-------------------- Step 1 ------------------`);
for (const role of employeeRole) {
    if (role=="Dev") {
        console.log(`Role of employee is: '${role}'`);
    }
}
console.log(`-------------------- Step 2 ------------------`);
const employeeName = employeeInfo.name;
let employeeLastName = employeeName.substr(6,employeeName.length-1)
console.log(`Last name of employee is: ${employeeLastName}`);
console.log(`-------------------- Step 3 ------------------`);
const employeeDoj = employeeInfo.doj;
let doj = new Date(employeeDoj)
console.log(`Joining year of employee is: ${doj.getFullYear()}`);
