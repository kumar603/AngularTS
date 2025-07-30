import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';


export const routes: Routes = [
  { path: 'students', component: StudentComponent },
   { path: 'courses', component: CourseComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];
