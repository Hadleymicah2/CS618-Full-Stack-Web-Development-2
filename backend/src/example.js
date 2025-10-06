// import db
import { initDatabase } from './db/init.js';

import { Post } from './db/models/post.js';

// call db (asynchronous) may at some point init
await initDatabase();

const post = new Post({
  title: 'Hello Mongoose!',
  author: 'Hadley Figueroa',
  contents: 'This post is stored in a MongoDB database using Mongoose.',
  tags: ['mongoose', 'mongodb'],
});

// after post.Dave, it will return created post
const createdPost = await post.save();

await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello again, Mongoose!' },
});

// read post
const posts = await Post.find();
console.log(posts);
