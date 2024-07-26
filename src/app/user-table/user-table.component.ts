import { Component, OnInit } from '@angular/core';
import { userTableService } from '../Services/userTableService.service';
import { SplitNamePipe } from '../Pipes/splitNamePipe.pipe';
import { Router, RouterModule } from '@angular/router';
import { postTableService } from '../Services/postTableService.service';
import { Post } from '../interfaces/IPost';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [SplitNamePipe, RouterModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent implements OnInit {
  constructor(
    public userTableService: userTableService,
    private postTableService: postTableService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userTableService.getUsers();
  }

  onUserClick(userId: number, userName: string) {
    this.postTableService.getUserPosts(userId).subscribe((posts: Post[]) => {
      this.postTableService.onUserPostSubject(posts);
      this.postTableService.postsUserName = userName;
      this.router.navigate(['/users', userId, 'posts']);
    });
  }
}
