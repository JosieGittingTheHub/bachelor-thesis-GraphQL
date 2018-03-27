import React, { Component } from 'react';
import SearchField from '../../components/SearchField';
import TagCloud from '../../components/TagCloud';
import Logo from '../../assets/moosic-logo-white.png';
import BackgroundIcon from './images/tag-icon-background.png';
import MoodCloud from '../../components/MoodCloud';


class TagScene extends Component {

  render() {
    return (
      <div className="tag-scene">
          <img className="moosic-label" src={Logo} alt="Moosic-Logo"/>
          <SearchField addTag={this.props.data.addTag}/>
          <MoodCloud addTag={this.props.data.addTag}/>
          <div className="tag-scene__cloud">
            <TagCloud tags={this.props.data.tags} removeTagByName={this.props.data.removeTagByName}/>
          </div>
          <div className="tag-scene__description">
              <img className="tag-scene__description__img" src={BackgroundIcon} alt="Tag-Logo"/>
              <p>Enter or select your mood to tell moosic what kind of playlists are perfect for you now.</p>
          </div>
          <input type="button" className="tag-scene__submit" value="G O  F O R  I T" onClick={this.props.data.getPlaylists}/>
      </div>
    );
  }
}

export default TagScene;