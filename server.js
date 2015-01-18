var app = require('cantina').createApp()
  , jsx = require('node-jsx');

// 'Install' jsx loader.
jsx.install();

// Boot app.
app.boot(function (err) {
  if (err) throw err;

  // Load plugins.
  app.require('cantina-web');

  // Run loaders.
  app.load('web');

  // Start the app.
  app.start();
});