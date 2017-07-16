import { Component, OnInit } from '@angular/core';

import { BlogPost } from "./post";
import { BlogService } from "./blog-service.component";
import { Router } from "@angular/router";



@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
    posts: BlogPost[];

    constructor(
        private router: Router,
        private blogService: BlogService
    ) { }
    getPosts(): void {
        this.blogService.getPosts().then(posts => this.posts = posts);
    }
    editPost(post:BlogPost): void {
        this.router.navigate(['/editpost', post.id]);
    }
    ngOnInit(): void {
        this.getPosts();
    }
}
