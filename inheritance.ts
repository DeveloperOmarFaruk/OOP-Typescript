// Base Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Derived Class
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  study(): string {
    return `${this.name} is studying for the ${this.grade} grade.`;
  }
}

// Derived Class
class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  teach(): string {
    return `${this.name} is teaching ${this.subject}.`;
  }
}

// Example usage
const student = new Student("Omar Faruk", 25, "8th");
console.log(student.greet()); // Output: Hello, my name is Omar Faruk and I am 25 years old.
console.log(student.study()); // Output: Omar Faruk is studying for the 8th grade.

const teacher = new Teacher("Harun Khan", 45, "English");
console.log(teacher.greet()); // Output: Hello, my name is Harun Khan and I am 45 years old.
console.log(teacher.teach()); // Output: Harun Khan is teaching English.
