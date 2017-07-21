import { Component, Input } from "@angular/core";
import { BlogPostTag } from "./blog-post-tag";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'tag-area',
    templateUrl : './tag-selector.component.html'
})
export class TagSelectorComponent { 
    @Input() items: BlogPostTag[];
    getTags():BlogPostTag[]
    {
        return this.items;
    }
    onItemAdding(value: string): Observable<BlogPostTag> {
        let tag = new BlogPostTag();
        tag.name = value.toLowerCase();
        tag.id = value.toLowerCase();
        return Observable.of(tag);
    }
}