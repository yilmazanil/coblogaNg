import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { BlogService } from "./blog-service.component";
import { BlogPost } from "./post";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit {
  title: String = 'app';
  postContent: BlogPost;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }
  // OnTextEditorKeyUp(content)
  // {
  //     console.log(content);
  // }
  OnEditorSave(content) {
    this.postContent.Body = content;
    this.blogService.update(this.postContent);
    console.log('Saved: ' + content);
  }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogService.getPost(+params.get('id')))
      .subscribe(postContent => this.postContent = postContent);
  }
}
