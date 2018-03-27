import React, { Component } from 'react';

class LoginButton extends Component {

    //href="http://localhost:3001/api/login"

  render() {
      return(
          <a onClick={this.props.onLogin} className="login-button">L O G I N &nbsp; W I T H &nbsp; S P O T I F Y</a>
        )}
}

export default LoginButton;