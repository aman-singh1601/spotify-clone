import React from 'react'
import './Footer.css'
import { PlayCircleOutline,
         SkipPrevious,
         SkipNext,
         Shuffle,
         Repeat,
         PlaylistPlay,
        VolumeDown } from '@mui/icons-material'
import { Grid,Slider } from '@mui/material'         
import cover_image from '../../image/cover_image.jpg' 

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_album_logo' 
        src={cover_image} 
        alt='' />
        <div className='footer_songInfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer_center'>
      <Shuffle className='footer_green'/>
      <SkipPrevious className='footer_icon'/>
      <PlayCircleOutline fontSize='large' className='footer_icon' />
      <SkipNext className='footer_icon'/>
      <Repeat className='footer_green'/>
      </div>
      <div className='footer_right'>
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlay/>
        </Grid>
        <Grid item>
          <VolumeDown/>
        </Grid>
        <Grid item xs>
          <Slider/>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer