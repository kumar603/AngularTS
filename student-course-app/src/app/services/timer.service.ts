// src/app/services/timer.service.ts
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  getCurrentTime(): Observable<string> {
    return interval(1000).pipe(
      map(() => new Date().toLocaleTimeString())
    );
  }
}
