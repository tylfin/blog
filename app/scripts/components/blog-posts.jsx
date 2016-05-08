'use strict'

var ReactDOM = require('react-dom'),
  React = require('react'),
  BlogPostBox = require('./blog-posts/blog-post-box');

ReactDOM.render(
  <BlogPostBox url="/api/posts" />,
  document.getElementById('blog-posts')
);
