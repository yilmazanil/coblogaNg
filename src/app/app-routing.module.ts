import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditComponent } from "./blog/post-edit.component";
import { PostListComponent } from "./blog/post-list.component";
import { PostDisplayComponent } from "./blog/post-display.component";

const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }