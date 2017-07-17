import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service'

import { AppComponent } from './app.component';
import { TextEditorComponent } from "./shared/text-editor.component";
import { PostEditComponent } from "./blog/post-edit.component";
import { PostReadComponent } from "./blog/post-read.component";
import { PostListComponent } from "./blog/post-list.component";

import { BlogService } from "./blog/blog-service.component";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    PostEditComponent,
    PostReadComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
