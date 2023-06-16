import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className='sidebar'>
      <img 
        className='sideBar_logo'
      src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
      />
      <SidebarOption title="Home"/>
      <SidebarOption title="Search"/>
      <SidebarOption title="Your Library"/>
    </div>
  )
}

export default Sidebar