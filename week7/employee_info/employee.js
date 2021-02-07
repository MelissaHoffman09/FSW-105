const employees = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}
Employee.prototype.printEmployeeForm = function() {
    console.log(this)
}

let kate = new Employee("Kate", "server", "$15/hr", "Full Time");
let jill = new Employee("Jill", "bartender", "$18/hr", "Full Time");
let nikki = new Employee("Nikki", "hostess", "$14/hr", "Part Time");

kate.printEmployeeForm();
jill.printEmployeeForm();
nikki.printEmployeeForm();

employees.push(kate, jill, nikki);

console.log(employees);
   