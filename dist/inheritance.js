"use strict";
// Base Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
// Derived Class
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying for the ${this.grade} grade.`;
    }
}
// Derived Class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}
// Example usage
const student = new Student("Omar Faruk", 25, "8th");
console.log(student.greet());
console.log(student.study());
const teacher = new Teacher("Harun Khan", 45, "English");
console.log(teacher.greet());
console.log(teacher.teach());
