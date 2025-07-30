import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Angular Directives Demo</h2>

    <!-- ngIf -->
    <button (click)="show = !show">Toggle Message</button>
    <p *ngIf="show">Hello! ngIf is working.</p>

    <!-- ngFor -->
    <ul>
      <li *ngFor="let name of names">{{ name }}</li>
    </ul>

    <!-- ngClass -->
    <p [ngClass]="{ 'highlight': isHighlighted }">This text is conditionally highlighted.</p>
    <button (click)="toggleHighlight()">Toggle Highlight</button>

    <!-- ngStyle -->
    <p [ngStyle]="{ 'color': fontColor, 'font-size': fontSize }">
      Styled using ngStyle!
    </p>
  `,
  styles: [`
    .highlight {
      background-color: yellow;
    }
  `]
})
export class DirectivesComponent {
  show = true;
  names = ['Kiran', 'Jane', 'Maria'];
  isHighlighted = false;
  fontColor = 'green';
  fontSize = '18px';

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
