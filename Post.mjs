// Defines the Post class for creating and managing blog posts.

export default class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  // Logs the post title and content to the console.
  publish() {
    console.log(`"${this.title}" has been published!\n${this.content}`);
  }
}
