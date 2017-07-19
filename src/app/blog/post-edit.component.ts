import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { BlogPost } from "./blog-post";

import 'rxjs/add/operator/switchMap';
import { BlogService } from "./blog.service";
import { TextEditorComponent } from "../shared/text-editor/text-editor.component";
import { TagSelectorComponent } from "../shared/tag-input/tag-selector.component";

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit {
  @ViewChild(TextEditorComponent)
  private textEditor: TextEditorComponent;
   @ViewChild(TagSelectorComponent)
  private tagSelector: TagSelectorComponent;

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
  // OnEditorSave(content) {
  //   this.postContent.Body = content;
  //   this.blogService.update(this.postContent);
  //   console.log('Saved: ' + content);
  // }

  Save(content) {
    this.postContent.Body = this.textEditor.getText();
    this.postContent.Tags = this.tagSelector.getTags();
    //this.postContent.Body = content;
    this.blogService.update(this.postContent);
    console.log('Saved: ' + content);
  }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogService.getPost(+params.get('id')))
      .subscribe(postContent => this.postContent = postContent);
  }
}
