var client_id = '420099d36fef478e9dfff118a4802694';
var client_secret = '4d1ef4d5c08140cb8ed8b993f4762bca';
var redirect_uri = 'http://localhost:3001/api/callback'; //redirect uri after login

'use strict';

const Spotify = require('spotify-web-api-node');
const querystring = require('querystring');
const express = require('express');
const router = new express.Router();
var request = require('request');

const STATE_KEY = 'spotify_auth_state';

// application requests authorization
const scopes = ['user-read-private', 'user-read-email'];

// configure spotify
const spotifyApi = new Spotify({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri
});

// generate a random string containing numbers and letters of N characters for the state
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);

// redirect the client to the spotify authorize url, but first set that user's state in the cookie.
router.get('/api/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

//get playlists for a given tag 
router.get('/api/playlists', function(req, res){
  res.header("Access-Control-Allow-Origin", "*"); // Origin 'http://localhost:3000' is allowed access

  spotifyApi.searchPlaylists(req.query.q)
  .then(function(data) {
    res.send({data});
  }, function(err) {
    res.send({err});
    console.log('Something went wrong:', err);
  });
});

/* callback: hit after the user logs in to spotifyApi, verify that the state we put in the cookie matches the state in the query
 parameter. Then, if all is good, redirect the user to the TagScene. 
 */

router.get('/api/callback', (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  // first do state validation
  if (state === null || state !== storedState) {
    res.redirect('/#/error/state mismatch');
  // if the state is valid, get the authorization code and pass it on to the client
  } else {
    res.clearCookie(STATE_KEY);
    // Retrieve an access token
    spotifyApi.authorizationCodeGrant(code)
    .then(function(data) {

      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);

      setInterval(function() {
          spotifyApi.refreshAccessToken()
            .then(function(data) {
              console.log('Refreshed token.');
            }, function(err) {
              console.log('Could not refresh the token!', err.message);
            });
      }, 3600000);
      
      res.redirect(`http://localhost:3000/#/tags`);
    }, function(err) {
      res.redirect('http://localhost:3000/#/error/invalid token');
    });
  }
});

module.exports = router;