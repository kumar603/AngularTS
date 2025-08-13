 
/* 
Writer : Kiran
Date: 13-Aug-2025
File: ang-typesafety.ts
Title: Angular Type Safety
 
Type Safety in TypeScript
Topic: Types (Primitive, Union, Any, Unknown)
 
 
The purpose of this task is to understand how TypeScript enforces type safety through explicit type annotations.
•	Primitive types (string, number, boolean, null, undefined)
•	Union types (multiple allowed types)
•	any type (turns off type checking — unsafe)
•	unknown type (safe alternative to any)

Type safety means your variables, parameters, and return values have a defined type, preventing  misuse at compile time.
 
 Prerequisites
•	Node.js installed
•	TypeScript installed globally (npm install -g typescript ts-node)
•	A tsconfig.json setup

 Project Structure Snapshot
    typescript-fundamentals/
        ├── ang-typesafety.ts
        ├── tsconfig.json
        └── package.json
*/

// Primitive types
let username: string = "Kiran";
let userAge: number = 35;
let isLoggedIn: boolean = true;

// Union type
let productId: number | string;
productId = 101;
productId = "SKU-101";

// Any type (not safe)
let randomValue: any = 15;
randomValue = "Now I'm a string";
randomValue = true; // No errors

// Unknown type (safe)
let safeValue: unknown = "TypeScript";
if (typeof safeValue === "string") {
    console.log("Uppercase:", safeValue.toUpperCase());
}

// Function with type safety
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log("Username:", username);
console.log("User Age:", userAge);
console.log("Is Logged In:", isLoggedIn);
console.log("Product ID:", productId);
console.log("Random Value (any):", randomValue);
console.log("Addition Result:", addNumbers(5, 7));
 

// Conclusion :
// •	Primitive types → Best for simple, fixed type values.
// •	Union types → Allow flexibility without losing type safety.
// •	any → Avoid using unless absolutely necessary (turns off type checking).
// •	unknown → Safer alternative to any, forces type checks.
// •	Type safety → Catches errors early during compilation, reducing runtime bugs.
 
