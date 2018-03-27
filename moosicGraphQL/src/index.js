import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
// import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import Login from './scenes/LoginScene';
import TagScene from './scenes/TagScene';
import ResultScene from './scenes/ResultScene';
import Error from './scenes/Error';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


// ReactDOM.render(
// //   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Login} />
//       <Route path="/tags" component={TagScene} />
//       <Route path="/results" component={ResultScene} />
//       <Route path="/error/:errorMsg" component={Error} />
//     </Route>
//   </Router>
//   , document.getElementById('root')
// )

ReactDOM.render(

  <BrowserRouter>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
);
// registerServiceWorker();