import { Component, OnInit, Input, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { BlogPost } from "./blog-post";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { BlogService } from "./blog.service";


@Component({
  selector: 'post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['../../assets/skins/tinymce/lightgray/content.min.css', '../../assets/prism/prism.css'],
  encapsulation: ViewEncapsulation.None //Styles apply to whole page, angular does not add div.container[_ngcontent-cds-2] for componentwise style definition
})
export class PostDisplayComponent implements OnInit, AfterViewChecked {
  //@Input() postId: number;
  activePost: BlogPost;
  initialized: Boolean;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    //this.blogService.getPost(this.postId).then(post => this.activePost = post);
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogService.getPost(+params.get('id')))
      .subscribe(postContent => this.activePost = postContent);
  }
  ngAfterViewChecked(): void {
    if (!this.initialized && this.activePost) {
      this.initialized = true;
      //this.activePost.Tags.every(tag=>tag.readonly=true);
      Prism.highlightAll();
    }
  }
  editPost() : void{
      this.router.navigate(['/editpost',this.activePost.id]);
  }
  joinTags(): string {
    return this.activePost.Tags.map(function(elem){return elem.name;}).join(";");
  }

}