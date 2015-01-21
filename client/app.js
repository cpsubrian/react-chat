var React = require('react')
  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Immutable = require('immutable')
  , idgen = require('idgen');

// App Component
var App = module.exports = React.createClass({

  displayName: 'App',
  mixins: [Router.state],

  getDefaultProps: function () {
    return {
      chats: [
        {key: idgen(), user: 'Leona', msg: 'Hello, World!'},
      ],
      users: [
        {key: idgen(), name: 'Leona'},
        {key: idgen(), name: 'Vayne'},
      ]
    };
  },

  render: function () {
    return (
      <div className="app">
        <h1>React Chat App</h1>
        <div className="content">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }

});