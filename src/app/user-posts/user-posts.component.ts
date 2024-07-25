import { Component } from '@angular/core';
import { postTableService } from '../Services/postTableService.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css',
})
export class UserPostsComponent {
  constructor(public postTableService: postTableService) {}
}
