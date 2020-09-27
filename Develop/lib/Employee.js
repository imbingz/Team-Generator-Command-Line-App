// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email, getName,) {
    this.name = name;
    this.id = id;
    this.email = email
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  
}


const e = new Employee




//Export the Employee Class
module.exports = Employee;