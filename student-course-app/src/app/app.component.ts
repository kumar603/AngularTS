import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet],
  // imports: [RouterModule],
  // template: `
  //   <h1>My Angular App</h1>
  //   <nav>
  //     <a routerLink="/databinding">Data Binding</a> |
  //     <a routerLink="/directives">Directives</a>
  //   </nav>
  //   <router-outlet></router-outlet> <!-- This is where your routed component will show -->
  // `
   template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/students">Students</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>`
})
export class AppComponent {}
