
import React,{ useEffect, useState } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from './Login/spotify';
import SpotifyWebApi from 'spotify-web-api-js'


const spotify=new SpotifyWebApi();

function App() {

  const [token,setToken]=useState(null);

  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe()
      .then(user=>{
        console.log(user)
      })
      .catch(err=> console.log(err))
    }

    console.log(token);
  },[]);

  return (
    <div className="App">
      {
        token?(<h1>hello</h1>):(<Login/>)
      }
    
    </div>
  );
}

export default App;
