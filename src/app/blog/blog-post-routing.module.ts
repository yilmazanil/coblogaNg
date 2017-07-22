import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDisplayComponent } from "./post-display.component";
import { PostEditComponent } from "./post-edit.component";
import { PostDisplayGuardService } from "./post-display-guard.service";
import { PostListComponent } from "./post-list.component";


const routes: Routes = [
    { path: 'readpost/:id', component: PostDisplayComponent, canActivate: [PostDisplayGuardService], },
    { path: 'editpost/:id', component: PostEditComponent, canActivate: [PostDisplayGuardService], },
    { path: 'posts', component: PostListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [PostDisplayGuardService]
})
export class BlogPostRoutingModule { }