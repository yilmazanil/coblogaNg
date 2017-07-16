import { Component, OnInit } from '@angular/core';

import { BlogPost } from "./post";
import { BlogService } from "./blog-service.component";



@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
    posts: BlogPost[];

    constructor(
        private blogService: BlogService
    ) { }
    getPosts(): void {
        this.blogService.getPosts().then(posts => this.posts = posts);
    }
    ngOnInit(): void {
        this.getPosts();
    }
}
