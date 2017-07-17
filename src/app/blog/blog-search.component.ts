import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { BlogPost } from "./post";
import { BlogSearchService } from "./blog-search.service";


@Component({
    selector: 'blog-search',
    templateUrl: './blog-search.component.html',
    providers: [BlogSearchService]
})
export class BlogSearchComponent implements OnInit {
    blogPosts: Observable<BlogPost[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private blogSearchService: BlogSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.blogPosts = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.blogSearchService.search(term)
                // or the observable of empty blogposts if there was no search term
                : Observable.of<BlogPost[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<BlogPost[]>([]);
            });
    }

    gotoDetail(blogPost: BlogPost): void {
        let link = ['/readpost', blogPost.id];
        this.router.navigate(link);
    }
}