import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: string[] = ['Kiran', 'Arjun', 'Divya'];

  getStudents(): string[] {
    return this.students;
  }

  addStudent(name: string) {
    this.students.push(name);
  }
}
