var React = require('react');

var BlogPostPagination = React.createClass({
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
    var pageNodes = this.generatePageNodes();
    if (pageNodes.length <= 1) {
      return (<div></div>)
    }
    return (
      <div className="row column">
        <ul className="pagination" role="navigation" aria-label="Pagination">
          <li><a className={(this.props.page === 1) ? 'disabled' : ''} onClick={this.props.updatePage.bind(null, this.props.page - 1)}>Previous</a></li>
            {pageNodes}
          <li><a onClick={this.props.updatePage.bind(null, this.props.page + 1)} className={(this.props.page === total) ? 'disabled' : ''} aria-label="Next page">Next</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = BlogPostPagination;
