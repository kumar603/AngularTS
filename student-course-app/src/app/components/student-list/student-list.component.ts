import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Student List</h2>
    <ul>
      <li *ngFor="let student of students">{{ student }}</li>
    </ul>

    <input [(ngModel)]="newStudent" placeholder="Enter name">
    <button (click)="addStudent()">Add Student</button>
  `
})
export class StudentListComponent {
  students: string[] = [];
  newStudent = '';

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    if (this.newStudent.trim()) {
      this.studentService.addStudent(this.newStudent.trim());
      this.students = this.studentService.getStudents(); // Refresh list
      this.newStudent = '';
    }
  }
}
