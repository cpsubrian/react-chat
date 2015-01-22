var React = require('react')
  , Fluxxor = require('fluxxor')
  , FluxMixin = Fluxxor.FluxMixin(React);

var Users = module.exports = React.createClass({

  displayName: 'Users',
  mixins: [FluxMixin],

  render: function () {
    return (
      <div className="users">
        <h3>Users</h3>
        <ul>
          {this.props.users.map(function (user) {
            return (
              <li key={user.id}>{user.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }

});