class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi,];
  console.log(`------------------- Step 1 ---------------------`);
  const wiproEmployees = arrayEmployees.filter((employee)=>{
    return employee.emp_company == "Wipro"
  })
  .forEach(employeedetails=>console.log(employeedetails))
  console.log(`------------------- Step 2 ---------------------`);
  const employeeFromITOrHr = arrayEmployees.filter((employee)=>{
    return employee.emp_dept == "IT" || employee.emp_dept == "HR"
  })
  .forEach(employeedetails=>console.log(employeedetails))
  console.log(`------------------- Step 3 ---------------------`);
  const employee = arrayEmployees.filter((employee)=>{
    return employee.emp_id > 50;
  })
  .forEach(employeedetails=>console.log(employeedetails))
console.log(`------------------------- Step 4 -----------------------`);
const array = arrayEmployees.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")
})
.forEach(employeeDetail=> console.log(employeeDetail))
console.log(`------------------------ Step 5 ---------------------------`);
const salaryOfEmployee = arrayEmployees.map((employee)=>{
    return employee.emp_salary
})
.reduce((runninngTotal,salary)=> runninngTotal + salary)
console.log(`Average salary of the employee from all department: ${salaryOfEmployee/arrayEmployees.length}`);
console.log(`------------------------ Step 6 ---------------------------`);
const itEmployee = arrayEmployees.filter((employee)=>{
    return employee.emp_dept == "IT"
})
let salarySum = 0;
  for (const employee of itEmployee) {
    salarySum = salarySum  + employee.emp_salary;
  };
console.log(`Average salary of emplyee from IT department: ${salarySum /itEmployee.length}`);