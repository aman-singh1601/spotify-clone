import React from 'react'
import './Footer.css'
import { PlayCircleOutline,
         SkipPrevious,
         SkipNext,
         Shuffle,
         Repeat } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
      <p>album and song details</p>
      </div>
      <div className='footer_center'>
      <Shuffle className='footer_green'/>
      <SkipPrevious className='footer_icon'/>
      <PlayCircleOutline fontSize='large' className='footer_icon' />
      <SkipNext className='footer_icon'/>
      <Repeat className='footer_green'/>
      </div>
      <div className='footer_right'>
      <p>Volume controls</p>
      </div>
    </div>
  )
}

export default Footer