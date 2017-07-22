import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, BaseRequestOptions } from "@angular/http";
import { FormsModule } from '@angular/forms'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data-service/in-memory-data.service'

import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app-routing.module";
import { BlogPostModule } from "./blog/blog-post.module";
import { HomeComponent } from "./home/home.component";
import { fakeBackendProvider } from "./shared/common/fakeBacked";
import { MockBackend } from "@angular/http/testing";
import { LoginComponent } from "./home/login.component";
import { AlertComponent } from "./shared/common/alert.component";
import { RegisterComponent } from "./home/register.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BlogPostModule,
  ],
  providers: [
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
