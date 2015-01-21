var React = require('react')
  , Chats = require('../components/chats')
  , ChatBox = require('../components/chatbox')
  , Users = require('../components/users');

var NotFound = module.exports = React.createClass({

  displayName: 'NotFound',

  render: function () {
    return (
      <div className="notfound">
        <h2>Page Not Found</h2>
        <p>Sorry, we couldn&rsquo;t find that page</p>
      </div>
    );
  }

});