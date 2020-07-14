import { DetailsComponent } from './components/details/details.component';
import { LoginTry1Component } from './components/login-try1/login-try1.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostsComponent } from './components/posts/posts.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: LoginTry1Component},
  {path: 'dashboard', component: BlogComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'details', component: DetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
