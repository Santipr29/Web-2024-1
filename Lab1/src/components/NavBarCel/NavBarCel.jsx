import React from 'react'
import { IconBtn } from '../IconBtn/IconBtn'
import "./NavBarCel.css"

export default function NavBarCel(){
    return(
      <>
      <section className="mainphone">
        <section className="left">
            <IconBtn className="yt" image="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png"></IconBtn>
        </section>
        <section className="right">
            <IconBtn className="share" image="https://static.thenounproject.com/png/3388431-200.png"></IconBtn>
            <IconBtn className="notifications" image="https://www.shareicon.net/data/512x512/2017/02/15/878700_alert_512x512.png"></IconBtn>
            <IconBtn className="search2" image="https://cdn.iconscout.com/icon/free/png-256/free-search-1990-1174913.png"></IconBtn>
        </section>
      </section>
      </>
    )
}