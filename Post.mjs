// Defines the Post class for creating and managing blog posts.
// Includes methods for publishing and formatting post content.

export class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.published = false;
  }

  publish() {
    this.published = true;
    console.log(`"${this.title}" has been published!\n${this.content}`);
  }
}
