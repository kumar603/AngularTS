import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DataBindingComponent {
  title = 'Angular Data Binding Example';
  username = '';
  message = '';

  showMessage() {
    this.message = `Hello, ${this.username}!`;
  }
}
