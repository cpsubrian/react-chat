var app = require('cantina').createApp();

app.boot(function (err) {
  if (err) throw err;

  // Load plugins.
  app.require('cantina-web');

  // Run loaders.
  app.load('web');

  // Start the app.
  app.start();
});