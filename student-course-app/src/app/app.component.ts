import { Component } from '@angular/core';
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Welcome to Angular 18</h1>
    <app-student></app-student> <!-- using student component -->
  `,
  imports: [StudentComponent],
})
export class AppComponent {}
