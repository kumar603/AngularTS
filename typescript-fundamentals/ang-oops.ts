 
/* 
Writer : Kiran
Date: 13-Aug-2025
File: ang-oops.ts
Title: Angular OOP
 
 
 

    Project Structure Snapshot
        typescript-fundamentals/
            ├── ang-oops.ts
            ├── tsconfig.json
            └── package.json
   

  Classes, Access Modifiers, Inheritance (OOP in TypeScript) 

To understand how **Object-Oriented Programming (OOP)** works in TypeScript, including how to define classes, 
control access to members using modifiers (`public`, `private`, `protected`), and implement inheritance for code reusability.

Key OOP Concepts in TypeScript

Class – Blueprint for creating objects with properties and methods.
Constructor – Special method that runs when a new object is created.
Access Modifiers
    `public` – Accessible from anywhere. (Default)
    `private` – Accessible only inside the class.
    `protected` – Accessible inside the class and derived (child) classes.
    Inheritance – Allows one class to extend another, inheriting its members.
    Method Overriding – Child class can redefine a parent method.


 
*/


// Parent Class
class Person {
    public name: string;
    protected age: number;
    private ssn: string;

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }

    private displaySSN(): void {
        console.log(`Security Number: ${this.ssn}`);
    }
}

// Child Class
class Employee extends Person {
    public role: string;

    constructor(name: string, age: number, ssn: string, role: string) {
        super(name, age, ssn); // call parent constructor
        this.role = role;
    }

    public work(): void {
        console.log(`${this.name} is working as a ${this.role}.`);
    }

    public getAge(): void {
        console.log(`Age (from protected): ${this.age}`);
    }
}

// Create objects
const emp1 = new Employee("Kiran", 35, "123-45-6789", "Software Engineer");

emp1.introduce(); // public method
emp1.work();      // child method
emp1.getAge();    // accessing protected
// emp1.displaySSN(); // ❌ Error: private method not accessible

// ### **5. Build and Run Procedure**

// 1. **Open terminal** in your `typescript-fundamentals` folder.
// 2. Save the file as `ang-oop.ts`.
// 3. Compile TypeScript to JavaScript:

//    tsc ang-oop.ts
 
// **Expected Output**:

// Hi, I'm Kiran, and I'm 35 years old.
// Kiran is working as a Software Engineer.
// Age (from protected): 35


//  Summary

// * **Classes** organize code into reusable blueprints.
// * **Access modifiers** control visibility and encapsulation.
// * **Inheritance** allows child classes to reuse and extend parent functionality.
// * TypeScript enforces type safety while supporting full OOP features.
 