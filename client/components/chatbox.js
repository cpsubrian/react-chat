var React = require('react')
  , Fluxxor = require('fluxxor')
  , FluxMixin = Fluxxor.FluxMixin(React);

var ChatBox = module.exports = React.createClass({

  displayName: 'ChatBox',
  mixins: [FluxMixin],

  getInitialState: function () {
    return {
      newMessage: ''
    }
  },

  onChangeMessage: function (e) {
    this.setState({newMessage: e.target.value});
  },

  onSubmit: function (e) {
    e.preventDefault();
    if (this.state.newMessage.trim()) {
      this.getFlux().actions.addChat({
        user: this.props.account,
        message: this.state.newMessage.trim(),
      });
      this.setState({newMessage: ''});
    }
  },

  render: function () {
    return (
      <div className="chatbox">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type here to chat"
            value={this.state.newMessage}
            onChange={this.onChangeMessage}
          />
          <input type="submit" value="Send"/>
        </form>
      </div>
    );
  }

});