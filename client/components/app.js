var React = require('react')
  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler;

// App Component
module.exports = React.createClass({
  mixins: [Router.state],

  render: function () {
    return (
      <div className="app">
        <h1>React Chat App</h1>
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }

});