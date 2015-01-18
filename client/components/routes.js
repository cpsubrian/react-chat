var React = require('react')
  , Router = require('react-router')
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute
  , App = require('components/app')
  , Home = require('components/pages/home');

module.exports = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
  </Route>
);