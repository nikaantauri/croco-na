import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userTableService } from '../Services/userTableService.service';

@Injectable({
  providedIn: 'root',
})
export class userTodosGuard implements CanActivate {
  constructor(
    private userTableService: userTableService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userTableService.userTodos.length === 0) {
      this.router.navigate(['/users']);
      return false;
    }
    return true;
  }
}
