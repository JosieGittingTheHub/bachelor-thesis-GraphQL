import React, { Component } from 'react';
import Party from '../assets/party.png';
import Icecreamy from '../assets/icecreamy.png';
import Sad from '../assets/sad.png';
import Sleepy from '../assets/sleepy.png';
class MoodCloud extends Component {

  addMood = (mood) => {
      this.props.addTag(mood)
  }

  render() {
    return (
      <div className="mood-cloud">
        <img className="mood-cloud__icon" src={Sad} alt="" onClick={() => {this.addMood('sad')}}/>
        <img className="mood-cloud__icon" src={Sleepy} alt="" onClick={() => {this.addMood('sleepy')}}/>
        <img className="mood-cloud__icon" src={Icecreamy} alt="" onClick={() => {this.addMood('icecream')}}/>
        <img className="mood-cloud__icon" src={Party} alt="" onClick={() => {this.addMood('party')}}/>
      </div>
    );
  }
}

export default MoodCloud;