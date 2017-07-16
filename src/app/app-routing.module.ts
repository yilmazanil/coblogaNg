import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostReadComponent } from "./blog/post-read.component";
import { PostEditComponent } from "./blog/post-edit.component";



const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'readpost/:id', component: PostReadComponent },
    { path: 'editpost/:id', component: PostEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }