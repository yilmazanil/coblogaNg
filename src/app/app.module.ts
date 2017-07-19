import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service'

import { AppComponent } from './app.component';
import { TextEditorComponent } from "./shared/text-editor.component";
import { PostEditComponent } from "./blog/post-edit.component";
import { PostReadComponent } from "./blog/post-read.component";
import { PostListComponent } from "./blog/post-list.component";

import { AppRoutingModule } from "./app-routing.module";
import { BlogService } from "./blog/blog.service";
import { BlogSearchComponent } from "./blog/blog-search.component";
import { TagAreaComponent } from "./tag-input/tag-area.component";

TagInputModule.withDefaults({
  tagInput: {
        placeholder: 'Yeni Etiket',
        identifyBy: 'id',
        displayBy : 'name',
        maxItems : 10,
        animationDuration : {enter: '0ms', leave: '0ms'}
    }
});

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    PostEditComponent,
    PostReadComponent,
    PostListComponent,
    BlogSearchComponent,
    TagAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    TagInputModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
