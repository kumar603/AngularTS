import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]) // no routing yet
  ]
};

bootstrapApplication(AppComponent, {
  providers: appConfig.providers,
}).catch(err => console.error(err));
