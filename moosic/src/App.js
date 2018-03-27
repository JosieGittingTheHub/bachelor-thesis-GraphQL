import React, { Component } from 'react';
import { getPlaylists } from './services/playlistService';
import { hashHistory } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Login from './scenes/LoginScene';
import TagScene from './scenes/TagScene';
import ResultScene from './scenes/ResultScene';
import './App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      playlists: [], 
      tags: []
    }
  }

  /*componentDidMount = () => {
    this.clearPlaylists()
  }*/

//Add entered tag and update playlists
  addTag = (tag) => {
    if(!this.state.tags.includes(tag)){
      let newTags = this.state.tags
      newTags.push(tag)
      this.setState({tags: newTags})
      this.updatePlaylists()
    }
  }

//Update playlists for given tags
  updatePlaylists = () => {
    this.clearPlaylists()
    this.state.tags.forEach(function(tag) {

      // TODO: foreach tag use filter query
      // add result to playlists array


      getPlaylists(tag)
      .then((playlists) => {
        let newPlaylists = this.state.playlists
        playlists.items.forEach(function(playlist) {
          newPlaylists.push(playlist)
        })
        this.setState({playlists: newPlaylists})
      })
      .catch((err) => {
        console.log("error")
        hashHistory.push('/');
      })
    }, this); 
  }

//Redirect to Result-Scene, shuffle and display playlists 
  showResults = () => {
      this.shufflePlaylists()
      if(this.state.tags.length !== 0){
        hashHistory.push('/results');
      }
  }

//Shuffle order of playlist-results
  shufflePlaylists() {
    let shuffledPlaylists = this.state.playlists
    for (let i = shuffledPlaylists.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [shuffledPlaylists[i - 1], shuffledPlaylists[j]] = [shuffledPlaylists[j], shuffledPlaylists[i - 1]];
    }
    this.setState({playlist: shuffledPlaylists})
  }

//Remove tag from array
  removeTagByName = (name) => {
    let newTags = this.state.tags
    let i = newTags.indexOf(name);
    if(i !== -1) {
      newTags.splice(i, 1);
    }
    this.setState({tags: newTags})
    if(newTags.length === 0 ){
      hashHistory.push('/tags');
    }
    this.updatePlaylists()
  }

//Clear all playlists 
  clearPlaylists = () => {
    this.setState({playlists: []})
  }

  render() {
    const data = {
      playlists: this.state.playlists, tags: this.state.tags, getPlaylists: this.showResults, addTag: this.addTag, removeTagByName: this.removeTagByName
    }

    console.log('servst du schon?', this.props.feedQuery.feed);

    return (
      <div className="app">
        <div className="app__header">
        </div>
        <div className="app__content">
          <Switch>
            <Route exact path="/login" render={(props) => <Login {...props} data={data}/>} />
            <Route exact path="/tags" render={(props) => <TagScene {...props} data={data}/>}/>
            <Route exact path="/results" render={(props) => <ResultScene {...props} data={data}/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

// 1
const FEED_QUERY = gql`
  # 2
  query FeedQuery {
    feed {
      title
      spotifyURI
    }
  }
`

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (App)
