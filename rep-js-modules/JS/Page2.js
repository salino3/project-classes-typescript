//* class Person
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  get job() {
    return this._job;
  }

  set job(newJob) {
    this._job = newJob;
  }

  Greet() {
    let text = "";
    if (this.job) {
      text = "employee";
    } else {
      text = "unemployed and I'm looking for a job";
    }
    console.log(
      `Hi, My name is ${this.name}, I am ${this.age} years old, I am ${text}`
    );
  }
}

let person1 = new Person("Joe", 25, false);
person1.Greet();

//!  class Worker
class Worker extends Person {

    #salary = 2000; // base salary

  constructor(name, age, profession, salary, job) {
    super(name, age, (job = true));

    this.profession = profession;
    this.salary = salary;
  }

  get profession() {
    return this._profession;
  };

  set profession(newProfession) {
    this._profession = newProfession;
  };

  get salary() {
    return this._salary;
  };

  set salary(newSalary){
    this._salary = newSalary;
  };


  Greet() {
    let text = "";
    if (this.job) {
      text = `working as ${this.profession}`;
    } else {
      text = "unemployed and I'm looking for a job";
    }
    console.log(
      `Hi, My name is ${this.name}, I am ${this.age} years old, I am ${text}`
    );
  };

  Salary(){
    console.log(`My salary currently is ${this.salary ? this.salary : this.#salary} per month`)
  };

};

let worker1 = new Worker("Tom", 34, "doctor", 2300);


//! class Manager
class Manager extends Worker {
  #salary = 3000;

  constructor(name, age, workers, salary = 3000, profession, job) {
    super(name, age, (profession = "manager"), (job = true));

    this.workers = workers;
    this.salary = salary;
  };

  get workers() {
    return this._workers;
  };
  set workers(newWorkers) {
    this._workers = newWorkers;
  };



  Salary() {
    super.Salary();
  }
};

let manager1 = new Manager('Tom', 41, 5);



export {  person1, worker1, manager1 };
