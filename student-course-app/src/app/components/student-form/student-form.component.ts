import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>  Student Registration Form</h2>

    <form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name" />
        <span *ngIf="studentForm.get('name')?.invalid && studentForm.get('name')?.touched" style="color:red">
          Name is required
        </span>
      </label>
      <br/><br/>

      <label>
        Email:
        <input type="email" formControlName="email" />
        <span *ngIf="studentForm.get('email')?.invalid && studentForm.get('email')?.touched" style="color:red">
          Valid Email is required
        </span>
      </label>
      <br/><br/>

      <label>
        Age:
        <input type="number" formControlName="age" />
        <span *ngIf="studentForm.get('age')?.invalid && studentForm.get('age')?.touched" style="color:red">
          Age must be between 18 and 60
        </span>
      </label>
      <br/><br/>

      <button type="submit" [disabled]="studentForm.invalid">Submit</button>
    </form>

    <pre>{{ studentForm.value | json }}</pre>
  `
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)])
  });

  onSubmit() {
    if (this.studentForm.valid) {
      alert('✅ Form Submitted:\n' + JSON.stringify(this.studentForm.value, null, 2));
    } else {
      alert('❌ Form is invalid!');
    }
  }
}
