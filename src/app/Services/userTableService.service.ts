import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class userTableService {
  constructor(private http: HttpClient) {}

  url: string = 'https://jsonplaceholder.typicode.com/';

  userData: User[] = [];

  getUsers() {
    this.http.get<User[]>(`${this.url}users`).subscribe((response: User[]) => {
      this.userData = response;
    });
  }
}
