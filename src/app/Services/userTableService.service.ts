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
  filteredData: User[] = [];
  getUsers() {
    this.http.get<User[]>(`${this.url}users`).subscribe((response: User[]) => {
      this.userData = response;
    });
  }

  searchTable(searchValue: string) {
    this.filteredData = this.userData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
