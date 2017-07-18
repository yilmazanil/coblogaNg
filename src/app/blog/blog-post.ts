import { BlogPostTag } from "./blog-post-tag";

export class BlogPost {
  id: number;
  Heading : string;
  Body: string;
  Tags: BlogPostTag[];
}