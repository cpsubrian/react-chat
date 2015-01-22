var Fluxxor = require('fluxxor')
  , constants = require('../constants')
  , idgen = require('idgen');

var ChatStore = module.exports = Fluxxor.createStore({

  initialize: function () {
    this.chats = [];

    this.bindActions(
      constants.ADD_CHAT, this.onAddChat
    );
  },

  getState: function () {
    return this.chats;
  },

  onAddChat: function (payload) {
    this.chats.push({id: idgen(), user: payload.user, message: payload.message});
    this.emit('change');
  }

});