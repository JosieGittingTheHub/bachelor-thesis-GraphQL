import React, { Component } from 'react'
import ResultList from './ResultList'
import CreatePlaylist from './CreatePlaylist'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={ResultList} />
            <Route exact path="/create" component={CreatePlaylist} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App