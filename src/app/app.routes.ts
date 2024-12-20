import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { UsersComponent } from './dashboard/users/users.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {
        path:"dashboard",component:DashboardComponent,
        children:[
            {path:"home",component:HomeComponent},
            {path:"user",component:UsersComponent},
            {path:"post",component:PostsComponent}
        ]
    }
];
