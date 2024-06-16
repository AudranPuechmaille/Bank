// date-time.service.ts

import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  currentDateTime$: Observable<Date>;

  constructor() {
    this.currentDateTime$ = interval(1000).pipe(
      map(() => new Date())
    );
  }
}
