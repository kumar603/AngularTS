/*****************************************************************************************************
Writer       : Kiran Kumar J
Description  : Get to know about routing in Angular with app.routes.ts file  
Created Date : 06 - August - 2025
Created By   : Kiran Kumar
Changed Date : 06 - August - 2025
Changed By   : Kiran Kumar
JIRA ID      : https://kiranjuvvanapudi.atlassian.net/browse/ATDAR-15
*****************************************************************************************************/
    /*
    This file is used to define the routes for the Angular application.

    The routes are defined using Angular's RouterModule, which allows for navigation between different components
    based on the URL path.

    The routes are structured to follow best practices for Angular routing, ensuring that the application remains modular,
    testable, and maintainable.
    
    The routes are designed to be reusable and maintainable, allowing for easy integration with components
    that need to interact with different views in the application.

    It defines routes for various components, including:
      - Data Binding Component
      - Directives Component
      - Student List Component
      - Home Component
      - About Component
      - Student Form Component
      - Student API Component


    Project Structure Snapshot:
        src/
      ├── app/
      │   ├── services/
      │   │   └── studentapis.service.ts      ✅
      │   ├── components/
      │   │   └── student-api/                ✅
      │   ├── app.config.ts
      │   └── app.routes.ts                   ✅

      Routes: The routes are defined as an array of objects, where each object represents a route with a path and a component.
      Redirect: The first route redirects the empty path to the 'databinding' path.
      Components: Each route maps a URL path to a specific component, allowing for navigation within the application.
      
      Lazy Loading: The routes can be extended to support lazy loading of modules for better performance.    
      
    Conclusion :
    This file is a crucial part of the Angular application, enabling navigation between different views
    and components. It adheres to Angular's best practices for routing, ensuring that the application
    remains modular, testable, and maintainable.
     */
import { Routes } from '@angular/router';
import { DataBindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
 
import { StudentFormComponent } from './components/student-form/student-form.component';

import { StudentApiComponent } from './components/student-api/student-api.component';



export const appRoutes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'student-list', component: StudentListComponent },
      { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentListComponent },
   { path: 'home', component: HomeComponent },
   { path: '', component: HomeComponent },
  { path: 'student-form', component: StudentFormComponent },
  { path: 'student-api', component: StudentApiComponent },

];
