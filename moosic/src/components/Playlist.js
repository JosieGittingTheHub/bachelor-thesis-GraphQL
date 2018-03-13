import React, { Component } from 'react'

class Playlist extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.playlist.title} ({this.props.playlist.spotifyURI})
        </div>
      </div>
    )
  }

  _voteForPlaylist = async () => {
    // ... you'll implement this in chapter 6
  }
}

export default Playlist