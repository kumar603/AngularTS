Yes ✅ — you can absolutely use **one single TypeScript project folder** for all the tasks in **Epic 3: TypeScript Fundamentals** instead of creating a new folder for each task.

Here’s the neat way to set it up:

---

### **1. Project Folder Structure**

```
AngularTS/
 └── typescript-fundamentals/
      ├── task1-types.ts
      ├── task2-interfaces-enums.ts
      ├── task3-classes-oop.ts
      ├── task4-generics.ts
      ├── task5-decorators.ts
      ├── task6-modules-namespaces.ts
      ├── tsconfig.json
      └── package.json


### **2. Create the Project**

```bash
mkdir typescript-fundamentals
cd typescript-fundamentals
npm init -y
npm install -g typescript ts-node
tsc --init


### **3. tsconfig.json (Basic Setup)**

Inside `tsconfig.json`, make sure you have:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true
  }
}


### **4. Running Any Task**

You have **two options**:

#### **Option A — Compile then Run**

```bash
tsc task1-types.ts
node dist/task1-types.js
```

#### **Option B — Run Directly with ts-node**

```bash
ts-node task1-types.ts
```

*(This is faster for learning and experimenting.)*

---

### **5. Benefits of This Setup**

* One folder for all Epic 3 tasks → easy to manage.
* Same TypeScript settings for all tasks.
* You can reuse helper files if needed.
* No repeated setup work for each task.

---

If you want, I can give you a **ready-to-use TypeScript project template** so you can start with `task1-types.ts` right away and just keep adding the remaining Epic 3 tasks. This way you only set up once.
