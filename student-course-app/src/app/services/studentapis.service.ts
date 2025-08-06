/*****************************************************************************************************
Writer       : Kiran Kumar J
Description  : Get to know about Consuming Restful APIS with create new model Student and loading data
                using HttpClient in Angular
                This file is used to define the service for student APIs.  
Created Date : 06 - August - 2025
Created By   : Kiran Kumar
Changed Date : 06 - August - 2025
Changed By   : Kiran Kumar
JIRA ID      : https://kiranjuvvanapudi.atlassian.net/browse/ATDAR-15
*****************************************************************************************************/
    /*
    This file is used to define the service for student APIs.
       
    The service is injectable and can be used throughout the Angular application.
   
    The service is structured to follow best practices for Angular services, including dependency injection,
    observables for handling asynchronous data, and a clear separation of concerns.
   
    The service is designed to be reusable and maintainable, allowing for easy integration with components
    that need to interact with student data.
   
    It defines an interface for the Student model and uses Observables for asynchronous operations.
    The API URL is set to a placeholder URL, which should be replaced with the actual API endpoint.
    
    It uses HttpClient to interact with a RESTful API for student data.
    The service provides methods to get all students, get a single student by ID,
    create a new student, update an existing student, and delete a student.

     Project Structure Snapshot:
        src/
      ├── app/
      │   ├── services/
      │   │   └── studentapis.service.ts      ✅
      │   ├── components/
      │   │   └── student-api/                ✅
      │   ├── app.config.ts
      │   └── app.routes.ts


      Injectable: This service is decorated with the `@Injectable` decorator, which allows it to be injected into components or other services.
      ProvideIn: The service is provide in the root injector, making it available throughout the application
      HttpClient: The service uses Angular's HttpClient to make HTTP requests to a RESTful API.
      Observable: The service methods return Observables, which are used to handle asynchronous data streams in Angular.
      API URL: The service interacts with a placeholder API URL, which should be replaced with the actual endpoint for student data.
      The service includes methods for:
        - Fetching all students
        - Fetching a single student by ID
        - Creating a new student
        - Updating an existing student
        - Deleting a student by ID
      
    Conclusion :
    This service is a crucial part of the Angular application, enabling the application to interact with
    a backend API for managing student data. It adheres to Angular's best practices for service
    development, ensuring that the application remains modular, testable, and maintainable.
     */
// src/app/services/studentapis.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentapisService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
