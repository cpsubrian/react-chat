var constants = require('../constants');

module.exports = {

  addChat: function (payload) {
    this.dispatch(constants.ADD_CHAT, payload);
  },

  joinUser: function (payload) {
    this.dispatch(constants.JOIN_USER, payload);
  },

  leaveUser: function (payload) {
    this.dispatch(constants.LEAVE_USER, payload);
  },

};