import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { postTableService } from '../Services/postTableService.service';
import { Post } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root',
})
export class userDataGuard implements CanActivate {
  constructor(
    private postTableService: postTableService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.postTableService.userPosts$.pipe(
      map((posts: Post[]) => {
        if (posts.length === 0) {
          this.router.navigate(['/users']);
          return false;
        }
        return true;
      })
    );
  }
}
