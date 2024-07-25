import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  getCurrentTime(): Observable<Date> {
    return interval(1000).pipe(map(() => new Date()));
  }
}
