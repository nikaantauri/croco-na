import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from '../interfaces/IPost';
import { User } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class postTableService {
  private url = 'https://jsonplaceholder.typicode.com/';

  userPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  private userPostSubject = new BehaviorSubject<Post[]>([]);
  public userPosts$ = this.userPostSubject.asObservable();

  username: string = '';

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
    return this.http
      .get<Post[]>(`${this.url}users/${userId}/posts`)
      .pipe(tap((posts: Post[]) => this.userPostSubject.next(posts)));
  }
}
