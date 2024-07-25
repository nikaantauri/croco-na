import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TimeService } from '../Services/timeService.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private timeService: TimeService) {}
  currentTime$: Observable<Date> = this.timeService.getCurrentTime();
}
