'use strict'

var ReactDOM = require('react-dom');
var React = require('react');
var BlogPostBox = require('./blog/blog-post-box');

ReactDOM.render(
  <BlogPostBox url="/api/posts" />,
  document.getElementById('blog-posts')
);
