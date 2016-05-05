var React = require('react');
var $ = require('jquery')
var BlogPostList = require('./blog-post-list');
var PaginateBlogPosts = require('./blog-post-pagination');

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

module.exports = BlogPostBox;
