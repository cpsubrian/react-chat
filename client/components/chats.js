var React = require('react')
  , Fluxxor = require('fluxxor')
  , FluxMixin = Fluxxor.FluxMixin(React);

var Chats = module.exports = React.createClass({

  displayName: 'Chats',
  mixins: [FluxMixin],

  render: function () {
    return (
      <div className="chats">
        <h3>Chats!</h3>
        <ul>
          {this.props.chats.map(function (chat) {
            return (
              <li key={chat.id}><strong>{chat.user.name}</strong> {chat.message}</li>
            );
          })}
        </ul>
      </div>
    );
  }

});