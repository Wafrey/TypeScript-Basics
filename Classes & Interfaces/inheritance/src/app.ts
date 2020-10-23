class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartament extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log("Reports " + this.reports);
  }
}

const it = new ITDepartament("Division1..", ["Pesho"]);
it.addEmployee("Gosho");
it.addEmployee("Pesho");
console.log(it);
it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment("Division2..", []);
accounting.addReport("Smth went wrong bro");
accounting.printReports();
