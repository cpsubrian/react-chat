var React = require('react')
  , Chats = require('../components/chats')
  , ChatBox = require('../components/chatbox')
  , Users = require('../components/users');

var Home = module.exports = React.createClass({

  displayName: 'Home',

  render: function () {
    return (
      <div className="home">
        <div className="row">
          <div className="columns small-8 chats-pane">
            <Chats {...this.props}/>
            <ChatBox {...this.props}/>
          </div>
          <div className="columns small-4 users-pane">
            <Users {...this.props}/>
          </div>
        </div>
      </div>
    );
  }

});