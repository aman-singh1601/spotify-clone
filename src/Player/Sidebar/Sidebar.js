import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

import { Home,Search,LibraryMusic } from '@mui/icons-material'
import { useDataLayerValue } from '../../DataLayer'

function Sidebar() {
  const [{playlists},disptach]=useDataLayerValue();

  return (
    <div className='sidebar'>
      <img 
        className='sideBar_logo'
      src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
      />
      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search"  Icon={Search}/>
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br/>
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {
        playlists?.items?.map(playlist=>(
          <SidebarOption title={playlist.name}/>
        ))
      }
     

    </div>
  )
}

export default Sidebar