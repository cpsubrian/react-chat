var React = require('react');

var Home = module.exports = React.createClass({

  displayName: 'Home',

  render: function () {
    return (
      <div className="home">
        <h2>Home Page</h2>
        <p>
          This is the home page.
        </p>
      </div>
    );
  }

});