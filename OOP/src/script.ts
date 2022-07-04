export class Employee{ 
  constructor(public readonly name:string, public readonly lastName:string){}
}

export class Company{ 
  public readonly name:string; 
  private readonly employees:Employee[] = []; 
  protected readonly CNPJ:string; 
  constructor(name:string, cnpj:string){
    this.name = name; 
    this.CNPJ = cnpj; 
  }
  addEmployee(employee:Employee):void{ 
    this.employees.push(employee); 
  }
}

const emp1 = new Employee("John", "Doe"); 
const emp2 = new Employee("Jane", "Doe"); 

const company1 = new Company("Microsoft", "2848484"); 

company1.addEmployee(emp1); 
company1.addEmployee(emp2); 

console.log(company1); 