// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  '../../services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
    standalone: true,
   imports: [FormsModule],
  template: `
    <div class="container mt-5">
      <h3>Login</h3>
      <input [(ngModel)]="username" placeholder="Username" class="form-control" />
      <input [(ngModel)]="password" type="password" placeholder="Password" class="form-control mt-2" />
      <button class="btn btn-primary mt-2" (click)="login()">Login</button>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
