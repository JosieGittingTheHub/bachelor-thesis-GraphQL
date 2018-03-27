**Project name:** moosic

**Project members:** Aurelia Bachmann (ab180), Sonja Nürenberg (sn043), Josefine Hartung (jh144), Antonia Verdier (av027)

## Project description:
moosic is a mobile first web app which allows Spotify users to find and use playlists that fit their current mood based on a simple keyword search. After logging in to Spotify with one's credentials, users may choose a mood or enter an endless amount of keywords which will then be used to search for matching playlists using the Spotify Web API. The found mixes are displayed in a scrollable list and can from there directly be played without any further screen changes. Although the app is mobile first, its design also works on bigger devices, such as desktop computers.

## Setup & install instructions: 
**To start the application, do the following steps:**
1. Install docker on your machine and run it
2. Run `$ docker build -t moosic .` in your project directory
3. Run `$ docker run -p 3000:3000 -p 3001:3001 moosic`
4. Open Browser on `http://localhost:3000/`

# Testing: 
**To start the tests, do the following steps:**
1. Run `$ npm install` in your project directory
2. Run `$ npm test` 