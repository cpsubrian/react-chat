var Fluxxor = require('fluxxor')
  , constants = require('../constants')
  , idgen = require('idgen');

var UserStore = module.exports = Fluxxor.createStore({

  initialize: function () {
    this.users = [
      {id: idgen(), name: 'Leona'},
      {id: idgen(), name: 'Pantheon'},
    ];

    this.bindActions(
      constants.JOIN_USER, this.onJoinUser,
      constants.LEAVE_USER, this.onLeaveUser
    );
  },

  getState: function () {
    return this.users;
  },

  onJoinUser: function (payload) {
    this.users.push(payload.user);
    this.emit('change');
  },

  onLeaveUser: function (payload) {
    this.users = this.user.filter(function (user) {
      return user.id !== payload.user.id;
    });
    this.emit('change');
  }

});