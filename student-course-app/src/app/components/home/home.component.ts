// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   template: `<h2>Welcome to Home Page</h2>`
// })
// export class HomeComponent {}

// src/app/components/home/home.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: `
    <div class="container mt-5">
      <h2>Welcome to the Home Page</h2>
      <button class="btn btn-info mt-3" (click)="getData()">Call Secured API</button>
      <div *ngIf="apiData" class="alert alert-success mt-3">
        {{ apiData }}
      </div>
    </div>
  `
})
export class HomeComponent {
  apiData: string = '';

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1', { responseType: 'text' })
      .subscribe(data => this.apiData = data);
  }
}
