import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BlogPost } from "./post";

@Injectable()
export class BlogSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<BlogPost[]> {
        return this.http
            .get(`api/posts/?Body=${term}`)
            .map(response => response.json().data as BlogPost[]);
    }
}