var React = require('react');

var Chats = module.exports = React.createClass({

  displayName: 'Chats',

  render: function () {
    return (
      <div className="chats">
        <h3>Chats!</h3>
        <ul>
          {this.props.chats.map(function (chat) {
            return (
              <li key={chat.key}><strong>{chat.user}</strong> {chat.msg}</li>
            );
          })}
        </ul>
      </div>
    );
  }

});