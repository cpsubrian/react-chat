module.exports = function (app) {
  var controller = app.controller();

  var React = require('react')
    , Router = require('react-router')
    , routes = require('../client/routes')
    , flux = require('../client/flux');

  controller.post('/api/chats', function (req, res, next) {
    console.log(req.body);
    res.redirect('/');
  });

  controller.add('*', function (req, res, next) {
    // General setup.
    res.vars.styles = ['/build/styles.css'];
    res.vars.scripts = ['/build/bundle.js'];

    // Run Router.
    Router.run(routes, req.href.path, function (Handler) {
      res.vars.page = React.renderToString(<Handler flux={flux}/>);
      res.render('page');
    });
  });

  return controller;
};