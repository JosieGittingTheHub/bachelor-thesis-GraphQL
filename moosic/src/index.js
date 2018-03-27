import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import Login from './scenes/LoginScene';
import TagScene from './scenes/TagScene';
import ResultScene from './scenes/ResultScene';
import Error from './scenes/Error';

ReactDOM.render(
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="/tags" component={TagScene} />
            <Route path="/results" component={ResultScene} />
            <Route path="/error/:errorMsg" component={Error} />
          </Route>
        </Router>
    , document.getElementById('root')
)