import { NgModule } from '@angular/core';

import { PostEditComponent } from "./post-edit.component";
import { PostDisplayComponent } from "./post-display.component";
import { PostListComponent } from "./post-list.component";
import { BlogSearchComponent } from "./blog-search.component";
import { BlogService } from "./blog.service";
import { PostDisplayGuardService } from "./post-display-guard.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    PostEditComponent,
    PostDisplayComponent,
    PostListComponent,
    BlogSearchComponent
  ],
  providers: [
    BlogService
  ],
  exports:[
    BlogSearchComponent,
    PostListComponent
  ]
})
export class BlogPostModule { }
