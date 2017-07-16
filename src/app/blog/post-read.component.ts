import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from "./blog-service.component";
import { BlogPost } from "./post";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'post-read',
  templateUrl: './post-read.component.html'
})
export class PostReadComponent implements OnInit {
  //@Input() postId: number;
  activePost: BlogPost;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    //this.blogService.getPost(this.postId).then(post => this.activePost = post);
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogService.getPost(+params.get('id')))
      .subscribe(postContent => this.activePost = postContent);
  }

}