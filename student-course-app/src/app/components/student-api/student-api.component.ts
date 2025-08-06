/*****************************************************************************************************
Writer       : Kiran Kumar J
Description  : Get to know about Consuming Restful APIS with create new component Student api and 
                loading data  using HttpClient in Angular
Created Date : 06 - August - 2025
Created By   : Kiran Kumar
Changed Date : 06 - August - 2025
Changed By   : Kiran Kumar
JIRA ID      : https://kiranjuvvanapudi.atlassian.net/browse/ATDAR-15
*****************************************************************************************************/
    /*
       
    This file is used to define the component for student APIs.
    
    The component is designed to be reusable and maintainable, allowing for easy integration with services
    that need to interact with student data.
  
    It defines a form for adding new students and displays a list of existing students.
  
    The component uses Angular's HttpClient to interact with a RESTful API for student data.
    The component provides methods to load all students, add a new student, and delete a student.
  
    The component is structured to follow best practices for Angular components, ensuring that it remains modular,
    testable, and maintainable.

    Project Structure Snapshot:
        src/
      ├── app/
      │   ├── services/
      │   │   └── studentapis.service.ts      ✅
      │   ├── components/
      │   │   └── student-api/                ✅
      │   ├── app.config.ts
      │   └── app.routes.ts

      Injectable: This component is decorated with the `@Component` decorator, which allows it to be used as a standalone component.
      Standalone: The component is standalone, meaning it can be used independently without being part of a module.
      Imports: The component imports CommonModule and ReactiveFormsModule for template rendering and form handling.   
      HttpClient: The component uses Angular's HttpClient to make HTTP requests to a RESTful API.
      Reactive Forms: The component uses Angular's Reactive Forms to handle form input and validation.
      Observable: The component methods return Observables, which are used to handle asynchronous data streams in Angular.
      API URL: The component interacts with a placeholder API URL, which should be replaced with the actual endpoint for student data.
      The component includes methods for:
        - Fetching all students
        - Adding a new student
        - Deleting a student by ID
    
      
    Conclusion :
    This component is a crucial part of the Angular application, enabling the application to interact with
    a backend API for managing student data. It adheres to Angular's best practices for component
    development, ensuring that the application remains modular, testable, and maintainable.
     */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentapisService, Student } from '../../services/studentapis.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-api',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>📡 Student API (CRUD)</h2>

    <form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
      <input formControlName="name" placeholder="Name" />
      <input formControlName="email" placeholder="Email" />
      <button type="submit">Add Student</button>
    </form>

    <ul>
      <li *ngFor="let student of students">
        {{ student.name }} - {{ student.email }}
        <button (click)="deleteStudent(student.id)">❌ Delete</button>
      </li>
    </ul>
  `
})
export class StudentApiComponent implements OnInit {
  students: Student[] = [];

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private studentapisService: StudentapisService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentapisService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  onSubmit() {
    const student = this.studentForm.value as Student;
    this.studentapisService.createStudent(student).subscribe(res => {
      this.loadStudents(); // Refresh list
      this.studentForm.reset();
    });
  }

  deleteStudent(id: number) {
    this.studentapisService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}

