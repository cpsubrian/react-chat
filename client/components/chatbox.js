var React = require('react');

var ChatBox = module.exports = React.createClass({

  displayName: 'ChatBox',

  render: function () {
    return (
      <div className="chatbox">
        <form method="POST" action="/api/chats">
          <input type="hidden" name="user" value="Brian"/>
          <input type="text" name="msg"/>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

});