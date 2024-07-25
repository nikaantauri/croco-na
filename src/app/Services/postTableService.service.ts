// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/IPost';
import { User } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class postTableService {
  private url = 'https://jsonplaceholder.typicode.com/';

  userPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  private userPostSubject = new Subject<Post[]>();
  public userPosts$ = this.userPostSubject.asObservable();

  onUserPostSubject(data: Post[]) {
    this.userPostSubject.next(data);
  }

  getPostsWithUsernames(): Observable<(Post & { username: string })[]> {
    return forkJoin({
      posts: this.http.get<Post[]>(`${this.url}posts`),
      users: this.http.get<User[]>(`${this.url}users`),
    }).pipe(
      map((result) => {
        const usernames: { [key: number]: string } = result.users.reduce(
          (acc, user) => {
            acc[user.id] = user.username;
            return acc;
          },
          {} as { [key: number]: string }
        );

        return result.posts.map((post) => ({
          ...post,
          username: usernames[post.userId],
        }));
      })
    );
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}users/${userId}/posts`);
  }
}
