console.log(`---------------------- Assignmentn 1---------------------`);
var tcsEligibility = function tcs(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore >= 70 || hscScore >= 80 || sscScore > 90 ? `Congrates "${candidateName}" you are eligible for TCS interview` : `"${candidateName}"Unfortunately you are not eligible for interview`;
    console.log(result);
}
tcsEligibility(80,86,90,"Tabbasum");
tcsEligibility(70,65,55,"Seeta");
tcsEligibility(60,79,88,"Geeta");

console.log(`---------------------- Assignmentn 2---------------------`);
console.log(`---------------------- Step 1 ---------------------`);
function maleMarriageEligibility(gender,age,boyName){
    var result = gender == 'Male' && age >= 21 ? `Hey '${boyName}' you are eligible for Marrige` : `'${boyName}' you are not eligible for marrige`
    return result;
}
var male1 = maleMarriageEligibility('Male',25,'Billgates');
console.log(male1);
var male2 = maleMarriageEligibility('Male',17,'Stew Jobs');
console.log(male2);

console.log(`---------------------- Step 2 ---------------------`);
function femaleMarriageEligibility(gender,age,girlName){
    var result = gender == 'Female' && age >= 18 ? `Hey '${girlName}' you are eligible for Marrige` : `'${girlName}' you are not eligible for marrige`
    return result;
}
var female1 = femaleMarriageEligibility('Female',16,'Jenifer');
console.log(female1);
var female2 = femaleMarriageEligibility('Female',27,'Malinda Gates');
console.log(female2);