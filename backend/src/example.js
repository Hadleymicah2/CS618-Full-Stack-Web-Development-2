// import db
import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'

import dotenv from 'dotenv'
dotenv.config()

// call db (asynchronous) may at some point init
await initDatabase()

const post = new Post({
  title: 'Hello second post!',
  author: 'John Doe',
  contents: 'This my new exciting content.',
  tags: ['frontend'],
})

await post.save()

// read post
const posts = await Post.find()
console.log(posts)
