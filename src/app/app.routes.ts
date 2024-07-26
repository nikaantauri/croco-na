import { Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

export const routes: Routes = [
  { path: 'users', component: UserTableComponent },
  { path: 'posts', component: PostTableComponent },
  { path: 'users/:userId/posts', component: UserPostsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' },
];
