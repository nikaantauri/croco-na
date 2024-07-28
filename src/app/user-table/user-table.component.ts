import { Component, OnInit } from '@angular/core';
import { userTableService } from '../Services/userTableService.service';
import { SplitNamePipe } from '../Pipes/splitNamePipe.pipe';
import { Router, RouterModule } from '@angular/router';
import { postTableService } from '../Services/postTableService.service';
import { Post } from '../interfaces/IPost';
import { FormsModule } from '@angular/forms';
import { Todo } from '../interfaces/UTodo';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [SplitNamePipe, RouterModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent implements OnInit {
  searchValue: string = '';
  constructor(
    public userTableService: userTableService,
    private postTableService: postTableService,
    private router: Router
  ) {}
  ngOnInit() {
    this.searchValue = this.userTableService.saveSearchValue;
    this.userTableService.getUsers();
  }

  onPostClick(userId: number, userName: string) {
    this.postTableService.getUserPosts(userId).subscribe((posts: Post[]) => {
      this.postTableService.onUserPostSubject(posts);
      this.postTableService.username = userName;
      this.router.navigate(['/users', userId, 'posts']);
    });
  }

  onTodoClick(userId: number, userName: string) {
    this.userTableService.getUserTodos(userId).subscribe((result: Todo[]) => {
      this.userTableService.userTodos = result;
      this.postTableService.username = userName;
      this.router.navigate(['/users', userId, 'todos']);
    });
  }

  onSearchTable() {
    this.userTableService.searchTable(this.searchValue);
  }
}
