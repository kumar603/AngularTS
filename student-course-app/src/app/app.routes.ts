import { Routes } from '@angular/router';
import { DataBindingComponent } from './databinding/databinding.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBindingComponent },
];
