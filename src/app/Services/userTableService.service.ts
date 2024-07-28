import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/IUser';
import { Todo } from '../interfaces/UTodo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userTableService {
  constructor(private http: HttpClient) {}

  url: string = 'https://jsonplaceholder.typicode.com/';

  userData: User[] = [];
  userTodos: Todo[] = [];
  filteredData: User[] = [];

  saveSearchValue: string = '';

  getUsers() {
    this.http.get<User[]>(`${this.url}users`).subscribe((result: User[]) => {
      this.userData = result;
    });
  }

  getUserTodos(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}user/${userId}/todos`);
  }

  searchTable(searchValue: string) {
    this.saveSearchValue = searchValue;
    this.filteredData = this.userData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
