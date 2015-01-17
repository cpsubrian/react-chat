var app = require('cantina').createApp();

app.boot(function (err) {
  if (err) throw err;

  // Load plugins.
  app.require('cantina-web');
  app.require('cantina-webpack');

  // Run loaders.
  app.load('web');

  // Start the app.
  app.start();
});