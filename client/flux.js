var Fluxxor = require('fluxxor')
  , stores = require('./stores')
  , actions = require('./actions');

module.exports = new Fluxxor.Flux(stores, actions);