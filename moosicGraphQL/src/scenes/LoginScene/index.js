import React, { Component } from 'react';
import InfoCarousel from './components/InfoCarousel'
import InfoView from './components/InfoView'
import LoginButton from './components/LoginButton'
import Logo from '../../assets/moosic-logo-white.png';

export default class Login extends Component {

  onLogin = () => {
    this.props.history.push('/tags');
  }


  render() {
    return (
      <div className="login-scene">
        <img src={Logo} alt={""} className="moosic-label moosic-label--login"/>
        <InfoCarousel/>
        <InfoView/>
        <LoginButton onLogin={this.onLogin}/>
      </div>
    );
  }
}