var React = require('react')
  , Router = require('react-router')
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute;

var App = require('./components/app')
  , Home = require('./components/pages/home');

var routes = module.exports = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
  </Route>
);