import React from 'react'
import { IconBtn } from '../IconBtn/IconBtn'
import "./NavBar.css"

export default function NavBar({onClick}){
  const handleShowMenu = (e) => {
    onClick()
  }
    return(
      <>
      <section className="main-bar">
        <section className="left-bar">
            <IconBtn clas="list" 
                    image="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" 
                    onClick={handleShowMenu}>

              </IconBtn>
            <IconBtn clas="yt" image="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png"></IconBtn>
        </section>
        <section className="center-bar">
            <input className="search-bar" placeholder="Search"></input>
            <IconBtn clas="search" image="https://cdn.iconscout.com/icon/free/png-256/free-search-1990-1174913.png"></IconBtn>
            <IconBtn clas="microphone" image="https://pixsector.com/cache/fb36ec30/av5e4cb285ffdbbf48898.png"></IconBtn>
        </section>
        <section className="right-bar">
            <IconBtn clas="upload" image="https://cdn.iconscout.com/icon/free/png-256/free-upload-1438217-1216178.png"></IconBtn>
            <IconBtn clas="notifications" image="https://www.shareicon.net/data/512x512/2017/02/15/878700_alert_512x512.png"></IconBtn>
            <IconBtn clas="profile" image="https://yt3.ggpht.com/I0yZzIyRQZ9PHPBA5yGbUnOHu6wt0vr1ONYvcwYwW2PKiVdCqOsibQ1579J5CAoS7BY_Mf7FHqo=s68-c-k-c0x00ffffff-no-rj"></IconBtn>
        </section>
      </section>
      </>
    )
}