import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { BlogPost } from "./blog-post";

@Injectable()
export class BlogService {
    private postsUrl = 'api/posts';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {

    }
    getPosts(): Promise<BlogPost[]> {

        return this.http.get(this.postsUrl)
            .toPromise()
            .then(response => this.trimPosts(response))
            .catch(this.handleError);
    }
    private trimPosts(response) :BlogPost[]
    {
        var posts = response.json().data as BlogPost[];
        for(let post of posts)
        {
            post.Body = post.Body.substring(0,50);
        }
        return posts;     
    }
    getPost(id: number): Promise<BlogPost> {
        const url = `${this.postsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as BlogPost)
            .catch(this.handleError);

    }
    update(blogPost: BlogPost): Promise<BlogPost> {
        const url = `${this.postsUrl}/${blogPost.id}`;
        return this.http
            .put(url, JSON.stringify(blogPost), { headers: this.headers })
            .toPromise()
            .then(() => blogPost)
            .catch(this.handleError);
    }
    create(body: string): Promise<BlogPost> {
        return this.http
            .post(this.postsUrl, JSON.stringify({ Body: body }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as BlogPost)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.postsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}