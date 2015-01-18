module.exports = function (app) {
  var controller = app.controller();

  controller.get('*', function (req, res, next) {
    res.vars.styles = ['/build/styles.css'];
    res.vars.scripts = ['/build/bundle.js'];
    res.vars.page = '<p>This would be the prerendered page</p>';
    res.render('app');
  });

  return controller;
};