var React = require('react');
var BlogPost = require('./blog-post');

var BlogPostList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function(post) {
      return (
        <BlogPost author={post.author} key={post.id} title={post.title} content={post.content}
          img={post.img} />
      );
    });
    return (
      <div className="blogPostList">
        {commentNodes}
      </div>
    );
  }
})

module.exports = BlogPostList;
