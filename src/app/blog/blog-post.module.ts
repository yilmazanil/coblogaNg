import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostEditComponent } from "./post-edit.component";
import { PostDisplayComponent } from "./post-display.component";
import { PostListComponent } from "./post-list.component";
import { BlogSearchComponent } from "./blog-search.component";
import { BlogService } from "./blog.service";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    PostEditComponent,
    PostDisplayComponent,
    PostListComponent,
    BlogSearchComponent,
  ],
  providers: [
    BlogService
  ]
})
export class BlogPostModule {}
