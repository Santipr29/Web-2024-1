import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import MainSections from './components/MainSections/MainSections';
import VideoSection from './components/VideoSection/VideoSection';
import NavBarCel from './components/NavBarCel/NavBarCel';
import MoreOptions from './components/MoreOptions/MoreOptions';
import "./App.css";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1023);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth > 1023);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSectionWidth = isWideScreen ? (showMenu ? 'calc(100% - 240px)' : 'calc(100% - 100px)') : '100%';

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
        <VideoSection widht={ videoSectionWidth }></VideoSection> 
      </section>
      </>
    )
}