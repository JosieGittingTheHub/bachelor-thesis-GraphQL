import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreatePlaylist extends Component {
  state = {
    title: '',
    spotifyURI: '',
  }

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Title of playlist"
          />
          <input
            className="mb2"
            value={this.state.spotifyURI}
            onChange={e => this.setState({ spotifyURI: e.target.value })}
            type="text"
            placeholder="Spotify URI"
          />
        </div>
        <button onClick={() => this._createPlaylist()}>Submit</button>
      </div>
    )
  }

  _createPlaylist = async () => {
    const { title, spotifyURI } = this.state
    await this.props.postMutation({
      variables: {
        title,
        spotifyURI
      }
    })
    this.props.history.push('/')
  }
}

// 1
const POST_MUTATION = gql`
  # 2
  mutation PostMutation($title: String!, $spotifyURI: String!) {
    post(title: $title, spotifyURI: $spotifyURI) {
      id
      title
      spotifyURI
    }
  }
`

// 3
export default graphql(POST_MUTATION, { name: 'postMutation' })(CreatePlaylist)