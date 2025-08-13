 
/* 
Writer : Kiran
Date: 13-Aug-2025
File:  ang-datastructures.ts
Title: Angular data structures
 
To learn how to define and use interfaces for structured data and enums for named constants in TypeScript, improving code clarity and maintainability.

Interfaces
•	A way to define the shape of an object (its properties and their types).
•	Used to enforce consistency across objects.
•	Supports optional properties (?) and readonly properties (readonly).
 
Enums
•	A set of named constants that represent possible values.
•	Makes code more readable and prevents using magic strings/numbers.
 
  Prerequisites
•	You must have Node.js and TypeScript installed.
•	You already have your typescript-fundamentals folder from Task 1.

*/

 
// Interface example
interface Student {
  id: number;
  name: string;
  course: string;
  isActive?: boolean; // optional property
}

// Enum example
enum CourseCategory {
  Programming = "Programming",
  Design = "Design",
  Marketing = "Marketing"
}

// Using Interface & Enum
let student1: Student = {
  id: 1,
  name: "Kiran",
  course: CourseCategory.Programming
};

let student2: Student = {
  id: 2,
  name: "John",
  course: CourseCategory.Design,
  isActive: true
};

// Function to display student info
function printStudentDetails(student: Student): void {
  console.log(`ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Course: ${student.course}`);
  console.log(`Active: ${student.isActive ? "Yes" : "No"}`);
  console.log("--------------------");
}

printStudentDetails(student1);
printStudentDetails(student2);
 

// Conclusion :
// Interfaces help define object structure, ensuring consistency.
// Enums group related constants under a readable name.
// Both improve type safety and readability in TypeScript projects.

 
