import React, { Component } from 'react'
import Playlist from './Playlist'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ResultList extends Component {
  render() {
    // 1
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading</div>
    }
  
    // 2
    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>
    }
  
    // 3
    const playlistsToRender = this.props.feedQuery.feed
  
    return (
      <div>{playlistsToRender.map(playlist => <Playlist key={playlist.id} playlist={playlist} />)}</div>
    )
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
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (ResultList)