var React = require('react')
  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Fluxxor = require('fluxxor')
  , FluxMixin = Fluxxor.FluxMixin(React)
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

// App Component
var App = module.exports = React.createClass({

  displayName: 'App',
  mixins: [Router.state, FluxMixin, StoreWatchMixin('ChatStore', 'UserStore')],

  getStateFromFlux: function () {
    var flux = this.getFlux();
    return {
      users: flux.store('UserStore').getState(),
      chats: flux.store('ChatStore').getState(),
    };
  },

  render: function () {
    return (
      <div className="app">
        <h1>React Chat App</h1>
        <div className="content">
          <RouteHandler {...this.state} account={this.state.users[0]}/>
        </div>
      </div>
    );
  }

});