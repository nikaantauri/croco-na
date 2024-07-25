import { Component, OnInit } from '@angular/core';
import { postTableService } from '../Services/postTableService.service';
import { Post } from '../interfaces/IPost';

@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.css',
})
export class PostTableComponent implements OnInit {
  constructor(public postTableService: postTableService) {}
  posts: (Post & { username: string })[] = [];

  ngOnInit() {
    this.postTableService.getPostsWithUsernames().subscribe((data) => {
      this.posts = data;
    });
  }
}
