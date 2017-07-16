import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from "./blog-service.component";
import { BlogPost } from "./post";

@Component({
  selector: 'post-read',
  templateUrl: './post-read.component.html'
})
export class PostReadComponent implements OnInit {
  @Input() postId: number;
  activePost: BlogPost;

  constructor(
    private blogService: BlogService
  ) { }
  ngOnInit(): void {
    this.blogService.getPost(this.postId).then(post => this.activePost = post);
  }

}