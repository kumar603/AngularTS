import { Routes } from '@angular/router';
import { DataBindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent }

];
