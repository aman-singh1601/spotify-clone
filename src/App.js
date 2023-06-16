
import React,{ useEffect, useState } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from './Login/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player/Player';

import {useDataLayerValue} from './DataLayer'

const spotify=new SpotifyWebApi();

function App() {

  // const [token,setToken]=useState(null);
  const [{user,token},disptach]=useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
 
    if(_token){
      
      disptach({
        type: "SET_TOKEN",
        token:_token
      })

      spotify.setAccessToken(_token);
      spotify.getMe()
      .then(user=>{

        disptach({
          type: 'SET_USER',
          user: user
        })
      })
      .catch(err=> console.log(err))
    }
  },[]);

  return (
    <div className="App">
      {
        token?
        (<Player spotify={spotify}/>):
        (<Login/>)
      }
    
    </div>
  );
}

export default App;
