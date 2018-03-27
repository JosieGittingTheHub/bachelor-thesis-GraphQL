import React, { Component } from 'react';


class InfoItem extends Component {

  render() {
    return (
        <div className="slider-item">
          <h3>{this.props.title}</h3>
          <div className="slider-item__text">
              {this.props.text}
          </div>
        </div>
    );
  }
}

export default InfoItem;