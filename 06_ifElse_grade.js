var voteEligible = function vote(age){
    var ageValue = +age;
    if (age<=0 || age>130 || isNaN(ageValue)) {
        console.log(`Your age is ${age} which is invalid `);
    } else {
        if (age>=18) {
            console.log(`Your age is ${age} so you are eligible for vate`);
        } else {
            console.log(`Your age is ${age} so you are not eligible for vote`);
        }
        
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);