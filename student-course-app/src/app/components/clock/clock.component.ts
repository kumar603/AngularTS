// src/app/components/clock/clock.component.ts
import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Observable } from 'rxjs';
import { CommonModule, AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
})
 
export class ClockComponent implements OnInit {
  time$!: Observable<string>;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.time$ = this.timerService.getCurrentTime();
  }
}



 