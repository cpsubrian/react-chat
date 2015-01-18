var React = require('react')
  , Router = require('react-router')
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute;

var App = require('./app')
  , Home = require('./pages/home');

module.exports = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
  </Route>
);