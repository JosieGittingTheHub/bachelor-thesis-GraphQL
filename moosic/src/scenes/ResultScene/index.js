import React, { Component } from 'react';
import ResultCard from './components/ResultCard';
import TagCloud from '../../components/TagCloud';
import MoodCloud from '../../components/MoodCloud';
import SearchField from '../../components/SearchField';
import {hashHistory } from 'react-router';
import Logo from '../../assets/moosic-logo-white.png';

class ResultScene extends Component {

  componentDidMount = () => {
    if(this.props.tags.length === 0 || this.props.playlists.length === 0){
      hashHistory.push('/tags');
    }
  }

  render() {

    return (
      <div className="result-scene">
          <img className="moosic-label moosic-label--result" src={Logo} alt="Moosic-Logo"/>
          <SearchField addTag={this.props.addTag}/>
          <MoodCloud addTag={this.props.addTag}/>
          <TagCloud tags={this.props.tags} removeTagByName={this.props.removeTagByName}/>
          <div className="result-scene__playlists">
          {this.props.playlists ? this.props.playlists.map(function(playlist, i){
            return(<ResultCard key={i} uri={playlist.uri}/>
            )
          }
          ) : null}
          </div>
      </div>
    );
  }
}

export default ResultScene;