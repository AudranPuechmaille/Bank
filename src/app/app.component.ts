// app.component.ts

import { Component } from '@angular/core';
import { DateTimeService } from './services/date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dateTimeService: DateTimeService) {} // Assurez-vous que DateTimeService est injecté publiquement
}
