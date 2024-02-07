import React from 'react'
import NavBar from './components/NavBar/NavBar'
import MainSections from './components/MainSections/MainSections'
import VideoSection from './components/VideoSection/VideoSection'

export default function App(){
    return(
      <>
      <h1>Hola mundo</h1>
      <NavBar></NavBar>
      <section>
        <MainSections></MainSections>
        <VideoSection></VideoSection>
      </section>
      </>
    )
}