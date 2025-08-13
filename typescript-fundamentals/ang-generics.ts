 
/* 
Writer : Kiran
Date: 13-Aug-2025
File: ang-generics.ts
Title: Angular generics
 
 
 
typescript-fundamentals/
│   ang-typesafety.ts
│   ang-interfaces-enums.ts
│   ang-oops.ts
│   ang-generics.ts
│   tsconfig.json
│   package.json

Generics in TypeScript allow you to create reusable, type-safe components, functions, and classes that can work with different data types while still maintaining strong type checking.
They help avoid duplicate code and make your code more flexible without losing type safety.

  Without generics, you might use `any` type for flexibility, but you lose type safety. 
  Generics allow flexibility *and* type safety.
 

 
*/
//   Generic function
function identity<T>(value: T): T {
    return value;
}

let numResult = identity<number>(100);
let strResult = identity<string>("Hello Generics");

console.log("Generic Function Results:");
console.log(numResult);
console.log(strResult);

//   Generic interface
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let kv1: KeyValuePair<number, string> = { key: 1, value: "One" };
let kv2: KeyValuePair<string, boolean> = { key: "isActive", value: true };

console.log("Generic Interface Results:");
console.log(kv1);
console.log(kv2);

//  Generic class
class Box<T> {
    private _content: T;

    constructor(content: T) {
        this._content = content;
    }

    getContent(): T {
        return this._content;
    }
}

let numbers = new Box<number>(123);
let strings = new Box<string>("TypeScript S");

console.log("Generic Class Results:");
console.log(numbers.getContent());
console.log(strings.getContent());

//   Generic constraint
function logLength<T extends { length: number }>(item: T) {
    console.log("Length:", item.length);
}

logLength("Hello");
logLength([1, 2, 3]);


//  Build & Run Procedure 

// tsc ang-generics.ts

// # Run the compiled JavaScript file
// node ang-generics.js

//  Summary

// Generics allow you to write reusable and type-safe code in TypeScript.
// They can be used with functions, interfaces, classes, and type aliases, ensuring flexibility without sacrificing type safety.