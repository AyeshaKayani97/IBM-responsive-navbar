import React from 'react'
import LeftBar from '../../components/Home/LeftBar'
import TopBar from '../../components/Home/TopBar'
import Gallery from '../../components/gallery/Gallery'
import "./mainLayout.css";
import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
   
    
      <div className="flex-1  mr-5">
        <TopBar />
        <Outlet/>
      </div>
  
  )
}

export default MainLayouts