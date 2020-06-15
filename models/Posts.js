const mongoose = require('mongoose');

const PostsShema = mongoose.Schema({
  images: [{
    type: String,
  }],
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  tags: [{
    type: String,
  }],
  // reactions: [{
  //   user: String,
  //   reaction_name: String,
  // }]
});

const Posts = mongoose.model('Posts', PostsShema);

module.exports = { Posts, PostsShema };
