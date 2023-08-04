let sbiBank = {
    bankName : "SBI Bank",
    location : "Akluj",
    accountNo : 23456678344,
    ifsc : "SBIN000567",
    intrestRate : 6.5,
    showDetails : function(){
        console.log(`Bank Details: Bank Name is - '${this.bankName}',Location is - '${this.location}',Account No. is - '${this.accountNo}',IFSC code is - '${this.ifsc}', Intrest Rate is -'${this.intrestRate}'`);
    }
}
let axisBank = {
    bankName : "Axis Bank",
    location : "Sangola",
    accountNo : 23424128344,
    ifsc : "AXISM000667",
    intrestRate : 7.5,
    showDetails : function(){
        console.log(`Bank Details: Bank Name is - '${this.bankName}',Location is - '${this.location}',Account No. is - '${this.accountNo}',IFSC code is - '${this.ifsc}', Intrest Rate is -'${this.intrestRate}'`);
    }
}
let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Pune",
    accountNo : 1234567823,
    ifsc : "HDFCg000767",
    intrestRate : 6.7,
    showDetails : function(){
        console.log(`Bank Details: Bank Name is - '${this.bankName}',Location is - '${this.location}',Account No. is - '${this.accountNo}',IFSC code is - '${this.ifsc}', Intrest Rate is -'${this.intrestRate}'`);
    }
}
let yesBank = {
    bankName : "YES Bank",
    location : "Solapur",
    accountNo : 22455568344,
    ifsc : "YESA000467",
    intrestRate : 6.6,
    showDetails : function(){
        console.log(`Bank Details: Bank Name is - '${this.bankName}',Location is - '${this.location}',Account No. is - '${this.accountNo}',IFSC code is - '${this.ifsc}', Intrest Rate is -'${this.intrestRate}'`);
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
