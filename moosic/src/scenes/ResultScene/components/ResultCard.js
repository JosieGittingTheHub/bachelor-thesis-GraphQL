import React, { Component } from 'react';
import ArrowExpand from '../../../assets/arrow-expand.png';
import ArrowCollapse from '../../../assets/arrow-collapse.png';

class ResultCard extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      detail: false,
    }
  }

  showDetail = () => {
    if(this.state.detail){
      this.setState({detail: false})
    } else {
      this.setState({detail: true})
    }
  }


  render() {

    let classes = "result-card__playlist-item"
    if(this.state.detail){
      classes = "result-card__playlist-item__active"
    }

    console.log('result uri', this.props);
    
    return (
      <div className="result-card" onClick={this.showDetail}>
        <div className={classes}>
          <iframe onClick={this.showDetail} src={`https://open.spotify.com/embed?uri=${this.props.uri}&theme=whit`} frameBorder="0" allowTransparency="true" height="380" width="100%"></iframe>
        </div>
        <div className="result-card__button" onClick={this.showDetail}>{this.state.detail ? <img src={ArrowCollapse} alt={""} className="result-card__button__image" height="20px"/> : <img src={ArrowExpand} alt={""} className="result-card__button__image" height="20px"/>}</div>
      </div>
    );
  }
}

export default ResultCard;