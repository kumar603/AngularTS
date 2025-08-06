/*****************************************************************************************************
Writer       : Kiran Kumar J
Description  : Get to know about Securing  application with JWT Token Interceptor
Created Date : 06 - August - 2025
Created By   : Kiran Kumar
Changed Date : 06 - August - 2025
Changed By   : Kiran Kumar
JIRA ID      : https://kiranjuvvanapudi.atlassian.net/browse/ATDAR-16
*****************************************************************************************************/
    /*
    This file is used to define the service for student APIs.
    login, logout, and token management functionalities.
    The service is injectable and can be used throughout the Angular application.   
    It provides methods to manage user authentication state and token retrieval.
    The service is crucial for securing API requests by attaching JWT tokens to HTTP headers.
    It adheres to Angular's best practices for service development, ensuring that the application remains modular, testable, and maintainable.
    
    The service is a crucial part of the Angular application, enabling the application to interact with
    a backend API for managing student data. It adheres to Angular's best practices for service
    development, ensuring that the application remains modular, testable, and maintainable.


     Project Structure Snapshot: 
        src/
      ├── app/
      │   ├── services/
      │   │   └── auth.service.service.ts      ✅
      │   ├── interceptors/
      │   │   └── auth.interceptor.ts          ✅
      │   ├── components/
      │   │   └── student-api/                ✅
      │   ├── app.config.ts
      │   └── app.routes.ts
      
    Conclusion :
    This service is a crucial part  of the Angular application, enabling the application to interact with
    a backend API for managing student data. It adheres to Angular's best practices for service
    development, ensuring that the application remains modular, testable, and maintainable.
    JWT Token Interceptor is used to secure API requests by attaching JWT tokens to HTTP headers.
    */
// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwtToken';

  login(username: string, password: string): boolean {
    // Simulate login
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.tokenKey, 'mock-jwt-token-123456');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
