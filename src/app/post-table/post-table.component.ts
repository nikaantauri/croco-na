import { Component, OnInit } from '@angular/core';
import { postTableService } from '../Services/postTableService.service';
import { Post } from '../interfaces/IPost';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [PopUpComponent, CommonModule],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.css',
})
export class PostTableComponent implements OnInit {
  constructor(public postTableService: postTableService) {}
  posts: (Post & { username: string })[] = [];

  isModalOpen = false;
  postData: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  openModal(data: Post) {
    this.isModalOpen = true;
    this.postData = data;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  ngOnInit() {
    this.postTableService.getPostsWithUsernames().subscribe((data) => {
      this.posts = data;
    });
  }
}
