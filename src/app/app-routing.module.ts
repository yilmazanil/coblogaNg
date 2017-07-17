import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostReadComponent } from "./blog/post-read.component";
import { PostEditComponent } from "./blog/post-edit.component";
import { PostListComponent } from "./blog/post-list.component";



const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'readpost/:id', component: PostReadComponent },
    { path: 'editpost/:id', component: PostEditComponent },
    { path: 'posts', component: PostListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }