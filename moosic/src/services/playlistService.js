import axios from 'axios';

 export function getPlaylists(tag){ 
    return axios.get(`http://localhost:3001/api/playlists?q=${tag}`)
      .then((response) => {
       let playlists = response.data.data.body.playlists
        return (playlists)
      }, (err) => {
          return(err);
        })     
  }