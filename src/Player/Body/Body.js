import React from 'react'
import './Body.css'
import Header from './Header/Header'
import cover_image from '../../image/cover_image.jpg'
import { useDataLayerValue } from '../../DataLayer'
import { FavoriteOutlined, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'
import SongRow from './SongRow/SongRow'

function Body({spotify}) {
  const [{discover_weekly},disptach]=useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body_info'>
        <img 
        src={discover_weekly?.images[0].url} alt=''/>
        <div className='body_infotext'>
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
          <div className='body_icons'>
            <PlayCircleFilled className='body_shuffle'/>
            <FavoriteOutlined fontSize='large'/>
            <MoreHoriz/>
          </div>
          {/*List of songs */}
          {discover_weekly?.tracks.items.map(item=>(
            <SongRow track={item.track}/>
          ))}
        </div>
    </div>
  )
}

export default Body