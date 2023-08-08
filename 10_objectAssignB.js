let bankSbi = {
    bankName : "SBI Bank",
    accountNo : 23456678344,
    ifsc : "SBIN000567",
}
let bakLocation = {
    street : "Ramchandrapuram",
    city : "Bangalore",
    pinCode : 560023,
}
console.log(`----------- Cloning by using Object.assign method -----------`);
let result = Object.assign({},bankSbi,bakLocation)
console.log(result);
console.log(`----------- Cloning by using spread operator -----------`);
let res = {...bankSbi,bakLocation}
console.log(res);
let rateOfIntrest = {
    homeLoanIntrest : "7.5%",
    personalLoanIntres : "8.6%",
    dueIntrest : "7.6%"
}
let sbiDetails = Object.assign({},result,rateOfIntrest);
console.log(`----------------------------------------`);
console.table(sbiDetails);
let merge = " ";
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        merge = merge.concat(element).concat(", ");
    }
}
console.log(`----------------------------------------`);
console.log(`Elements in SBI bank are: ${merge}`);