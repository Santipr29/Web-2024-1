import React from 'react'
import NavBar from './components/NavBar/NavBar'
import MainSections from './components/MainSections/MainSections'
import VideoSection from './components/VideoSection/VideoSection'
import NavBarCel from './components/NavBarCel/NavBarCel'

export default function App(){
    return(
      <>
      <NavBarCel></NavBarCel>
      <NavBar></NavBar>
      <section>
        <MainSections></MainSections>
        <VideoSection></VideoSection>
      </section>
      </>
    )
}