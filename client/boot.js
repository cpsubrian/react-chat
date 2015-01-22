var React = require('react')
  , Router = require('react-router')
  , routes = require('./routes')
  , flux = require('./flux');

// Listen for dispatch events.
flux.on('dispatch', function (type, payload) {
  console.log('[Dispatch]', type, payload);
});

// Start the Router.
Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler flux={flux}/>, document.getElementById('page'));
});
