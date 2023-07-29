function marriageEligibilty(gender,age){
    var ageValue = +age;
    if (gender=='Female' && age>=18) {
        console.log(`Gender is ${gender} & age is ${age}, so you are eligible for marriage`);
    }
    if (gender=='Male' && age>=21) 
    console.log(`Gender is ${gender} & age is ${age}, so you are eligible for marriage`);{
    }
    if (gender=='Other' ||  isNaN(ageValue) || age<18) {
        console.log(`Gender is ${gender} & age is ${age} which is invalid input,please provide valid input`);
    }
}
marriageEligibilty('Male',17);
marriageEligibilty('Male',25);
marriageEligibilty('Female',28);
marriageEligibilty('Female',16);
marriageEligibilty('Other',35);
marriageEligibilty('Other',41);