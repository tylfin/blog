'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')

var BlogPostBox = React.createClass({
  getInitialState: function() {
    return {data: [], showData: [], page: 1, perPage: 3};
  },

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        var showData = []
        if (data.length > this.state.perPage) {
          showData = data.slice(0, this.state.perPage);
        }
        else {
          showData = data;
        }
        this.setState({showData: showData, data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  updatePage: function(newPage) {
    var start = (newPage - 1) * this.state.perPage;
    var end = newPage * this.state.perPage;
    var showData = this.state.data.slice(start, end);
    this.setState({showData: showData, page: newPage});
  },

  render: function() {
    return (
      <div className="row medium-8 large-7 columns">
        <BlogPostList data={this.state.showData} />
        <PaginateBlogPosts data={this.state.data} page={this.state.page} perPage={this.state.perPage} updatePage={this.updatePage} />
      </div>
    );
  }
});

var PaginateBlogPosts = React.createClass({
  generatePageNodes: function() {
    var total = Math.ceil(this.props.data.length / this.props.perPage);
    var pageNodes = [];
    for (var i = 1; i <= total; i++) {
      if (i === this.props.page) {
        pageNodes.push(<li key={i} className="current"><span className="show-for-sr">You're on page</span> {i}</li>)
      }
      else {
        pageNodes.push(<li key={i}><a onClick={this.props.updatePage.bind(null, i)} aria-label="page">{i}</a></li>)
      }
    }
    return pageNodes
  },

  render: function() {
    var total = Math.ceil(this.props.data.length / this.props.perPage);
    console.log(total);
    var pageNodes = this.generatePageNodes();
    if (pageNodes.length <= 1) {
      return (<div></div>)
    }
    return (
      <div className="row column">
        <ul className="pagination" role="navigation" aria-label="Pagination">
          <li className={(this.props.page === 1) ? 'disabled' : ''} onClick={this.props.updatePage.bind(null, this.props.page - 1)}>Previous</li>
            {pageNodes}
          <li><a href="#" onClick={this.props.updatePage.bind(null, this.props.page + 1)} className={(this.props.page === total) ? 'disabled' : ''} aria-label="Next page">Next</a></li>
        </ul>
      </div>
    )
  }
})

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

var BlogPost = React.createClass({
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


ReactDOM.render(
  <BlogPostBox url="/api/posts" />,
  document.getElementById('blogPost')
);
