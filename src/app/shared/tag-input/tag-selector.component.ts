import { Component, Input } from "@angular/core";
import { BlogPostTag } from "./blog-post-tag";

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
}