class Vehicle {
    constructor(company,color,typeOfVehicle,model,price){
        this.company = company;
        this.color = color;
        this.typeOfVehicle = typeOfVehicle;
        this.model = model;
        this.price = price;
    }
}
let vehicleMaruti = new Vehicle("Maruti Suzuki", "Grey", "Four wheeler", "Baleno","8.5 Lakh");
let vehicleTata = new Vehicle("Tata Motors","Black","Four wheeler","Nexon","9.5 Lakh");
let vehicleRoyal = new Vehicle("Royal Enfield","Black","Two wheeler","Hunter","1.75 Lakh");
let vehicleBajaj = new Vehicle("Bajaj","Matte Coarse Grey","Two wheeler","Chetak","1.45 Lakh");
let vehicleHyundai = new Vehicle("Hyundai","Fiery Red","Four wheeler","Tucson","28.5 Lakh");
const arrayOfVehicles = [vehicleMaruti,vehicleTata,vehicleRoyal,vehicleBajaj,vehicleHyundai]
console.log(`------------------- Step 1 ------------------`);
for (const vehicle of arrayOfVehicles) {
    console.log(`Vehicles details are , Company name: ${vehicle.company}, Color: ${vehicle.color},Type: ${vehicle.typeOfVehicle}, Model: ${vehicle.model}, Price: ${vehicle.price}`);
    console.log(`----------------------------------------------------`);
}
class College{
    constructor(name,year,city,founder){
        this.name = name;
        this.year = year;
        this.city = city;
        this.founder = founder;
    }
    display(){
        console.log(`College details are, Name: ${this.name}, Established year: ${this.year}, City:${this.city},Founder: ${this.founder}`);
    }
}
const coep = new College("COEP Pune", 1854,"Pune","Theodore Cooke,M.A");
const skn = new College("SKN, Pune",1996,"Pune","M.N.Navale");
const ftc = new College("FTCCOER", 2001,"Solapur","Birasaheb Rupnar");
const mit = new College("MIT", 1990, "Mumbai", "Sitaji Narayan");
const arrayOfCollege = [coep,skn,ftc,mit];
console.log(`------------------------ Step 2 -----------------------`);
for (const college of arrayOfCollege) {
    college.display();
    console.log(`-------------------------------------------------------`);
}
function traverseObject(collegeObj){
    for (const key in collegeObj) {
        if (Object.hasOwnProperty.call(collegeObj, key)) {
            const element = collegeObj[key];
            console.log(`${key}: ${element}`); 
            
        }
    }

}
console.log(`------------------- Step 3---------------------`);
traverseObject(coep);
console.log(`-------------------------------------------------`);
traverseObject(skn);
console.log(`-------------------------------------------------`);
traverseObject(ftc);
console.log(`-------------------------------------------------`);
traverseObject(mit);

