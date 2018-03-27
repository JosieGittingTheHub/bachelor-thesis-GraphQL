import React, { Component } from 'react';

import Slider from 'react-slick';
import InfoItem from './InfoItem';
import MoodIcon from '../../../assets/mood-icon.png';
import ListenIcon from '../../../assets/listen-icon.png';
import ResultIcon from '../../../assets/result-icon.png';
import TagsIcon from '../../../assets/tags-icon.png';

// from https://github.com/akiran/react-slick

class InfoCarousel extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <Slider {...settings} className="login-info-carousel">
        <div>
          <img src={MoodIcon} alt={""} className="login-info-carousel__image"/>
          <InfoItem title="Mood" text="Choose the mood you are currently in and you want to find the suitable music for."/>
        </div>
        <div>
          <img src={TagsIcon} alt={""} className="login-info-carousel__image"/>
          <InfoItem title="Tags" text="Search for artists, titles and genres to add a tag to your search results."/>
        </div>
        <div>
          <img src={ResultIcon} alt={""} className="login-info-carousel__image"/>
          <InfoItem title="Results" text="Playlists will be shown as search results. Just perfect for your mood."/>
        </div>
        <div>
          <img src={ListenIcon} alt={""} className="login-info-carousel__image"/>
          <InfoItem title="Listen" text="Start listening to the playlist with all the songs you secretly dreamed of."/>
        </div>
      </Slider>
    );
  }
}

export default InfoCarousel;