let professor = {
    profName : "Harry",
    age : 27,
    state : "MH",
    phoneNo : "879654367",
    emailId : "harry23@gail.com",
    degrees:{
        engineering : "CSE",
        masters : "CSE",
        phd : "Advance Computing",
    },
    certificates : ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv programming"],
    teacherDegrees: function(){
        console.log(`Teacher degrees are: ${this.engineering}, ${this.masters},${this.phd}`);
    }
}
professor.totalExperiencne = "14 years";
console.log(professor);
professor.phoneNo = "8392047593";
console.log(professor);
professor.certificates.unshift("Oracle Certified");
let lastElement = professor.certificates[professor.certificates.length-1];
console.log(lastElement);