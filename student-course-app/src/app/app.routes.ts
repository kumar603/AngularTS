import { Routes } from '@angular/router';
import { DataBindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

 


export const appRoutes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'student-list', component: StudentListComponent },
      { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentListComponent },
   { path: 'home', component: HomeComponent },
   { path: '', component: HomeComponent },
];
