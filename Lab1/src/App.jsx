import React from 'react'
import {useState} from 'react'
import NavBar from './components/NavBar/NavBar'
import MainSections from './components/MainSections/MainSections'
import VideoSection from './components/VideoSection/VideoSection'
import NavBarCel from './components/NavBarCel/NavBarCel'
import MoreOptions from './components/MoreOptions/MoreOptions'
import "./App.css"

export default function App(){
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (e) => {
    setShowMenu(!showMenu)
  }

    return(
      <>
      <NavBarCel></NavBarCel>
      <NavBar onClick={handleShowMenu}></NavBar>
      <section className="content">
        {
          showMenu 
          ? <MoreOptions></MoreOptions>
          : <MainSections></MainSections>
        }
        <VideoSection></VideoSection>
      </section>
      </>
    )
}