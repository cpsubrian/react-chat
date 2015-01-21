var React = require('react')
  , Router = require('react-router')
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute
  , NotFoundRoute = Router.NotFoundRoute;

var App = require('./app')
  , Home = require('./pages/home')
  , NotFound = require('./pages/notfound');

var routes = module.exports = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);