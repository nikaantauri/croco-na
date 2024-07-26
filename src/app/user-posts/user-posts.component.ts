import { Component, OnInit } from '@angular/core';
import { postTableService } from '../Services/postTableService.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../interfaces/IPost';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css',
})
export class UserPostsComponent implements OnInit {
  constructor(
    public postTableService: postTableService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postTableService.userPosts$.subscribe((data: Post[]) => {
      if (data.length === 0) {
        this.router.navigate(['/users']);
      }
    });
  }
}
