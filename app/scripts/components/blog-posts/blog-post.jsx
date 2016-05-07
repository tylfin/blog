var React = require('react');

var BlogPost = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    img: React.PropTypes.string,
    content: React.PropTypes.string,
    author: React.PropTypes.string
  },
  render: function() {
    return (
      <div className="blog-post">
        <h3>{this.props.title} <small>3/6/2016</small></h3>
        <img src={this.props.img} className="thumbnail"/>
        <p>{this.props.content}</p>
        <div className="callout">
          <ul className="menu simple">
            <li><a href="#">Author: {this.props.author}</a></li>
            <li><a href="#">Comments: 3</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = BlogPost;
