// Imports the Post class and demonstrates creating and publishing a blog post.

import { Post } from "./Post.mjs";

const post1 = new Post(
  "Stuff and Things I Thought You might Like to Know",
  "The african swallow is a small bird that can carry a coconut in its beak, but only if it is otherwise unladen.\nEuropean swallows can only carry a coconut if two of them work together—each gripping it by the husk."
);

post1.publish();
