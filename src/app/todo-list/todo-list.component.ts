import { Component } from '@angular/core';
import { userTableService } from '../Services/userTableService.service';
import { NgClass } from '@angular/common';
import { postTableService } from '../Services/postTableService.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(
    public userTableService: userTableService,
    public postTableService: postTableService
  ) {}
}
