import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditComponent } from "./blog/post-edit.component";
import { PostListComponent } from "./blog/post-list.component";
import { PostDisplayComponent } from "./blog/post-display.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./home/login.component";
import { JwtAuthGuard } from "./home/jwtAuth-guard.service";
import { RegisterComponent } from "./home/register.component";
import { PostDisplayGuardService } from "./blog/post-display-guard.service";

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate : [JwtAuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'readpost/:id', component: PostDisplayComponent, canActivate: [PostDisplayGuardService], },
    { path: 'editpost/:id', component: PostEditComponent, canActivate: [PostDisplayGuardService], },
    { path: 'posts', component: PostListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers : [JwtAuthGuard, PostDisplayGuardService]
})
export class AppRoutingModule { }