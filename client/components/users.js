var React = require('react');

var Users = module.exports = React.createClass({

  displayName: 'Users',

  render: function () {
    return (
      <div className="users">
        <h3>Users</h3>
        <ul>
          {this.props.users.map(function (user) {
            return (
              <li key={user.key}>{user.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }

});