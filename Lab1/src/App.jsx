import React from 'react'
import NavBar from './components/NavBar/NavBar'
import MainSections from './components/MainSections/MainSections'
import VideoSection from './components/VideoSection/VideoSection'
import NavBarCel from './components/NavBarCel/NavBarCel'
import "./App.css"

export default function App(){
    return(
      <>
      <NavBarCel></NavBarCel>
      <NavBar></NavBar>
      <section className="content">
        <MainSections></MainSections>
        <VideoSection></VideoSection>
      </section>
      </>
    )
}