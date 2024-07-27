import { Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { userDataGuard } from './guards/user-data.guard';
import { userTodosGuard } from './guards/user-todos.guard';

export const routes: Routes = [
  { path: 'users', component: UserTableComponent },
  { path: 'posts', component: PostTableComponent },
  {
    path: 'users/:userId/posts',
    component: UserPostsComponent,
    canActivate: [userDataGuard],
  },
  {
    path: 'users/:userId/todos',
    component: TodoListComponent,
    canActivate: [userTodosGuard],
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' },
];
