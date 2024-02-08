import React from 'react'
import { IconBtn } from '../IconBtn/IconBtn'
import "./NavBar.css"

export default function NavBar(){
    return(
      <>
      <section className="main">
        <section className="left">
            <IconBtn className="list" image="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"></IconBtn>
            <IconBtn className="yt" image="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png"></IconBtn>
        </section>
        <section className="center">
            <input className="searchbar" placeholder="Search"></input>
            <IconBtn className="search" image="https://cdn.iconscout.com/icon/free/png-256/free-search-1990-1174913.png"></IconBtn>
            <IconBtn className="microphone" image="https://pixsector.com/cache/fb36ec30/av5e4cb285ffdbbf48898.png"></IconBtn>
        </section>
        <section className="right">
            <IconBtn className="upload" image="https://cdn.iconscout.com/icon/free/png-256/free-upload-1438217-1216178.png"></IconBtn>
            <IconBtn className="notifications" image="https://www.shareicon.net/data/512x512/2017/02/15/878700_alert_512x512.png"></IconBtn>
            <IconBtn className="profile" image="https://yt3.ggpht.com/I0yZzIyRQZ9PHPBA5yGbUnOHu6wt0vr1ONYvcwYwW2PKiVdCqOsibQ1579J5CAoS7BY_Mf7FHqo=s68-c-k-c0x00ffffff-no-rj"></IconBtn>
        </section>
      </section>
      </>
    )
}