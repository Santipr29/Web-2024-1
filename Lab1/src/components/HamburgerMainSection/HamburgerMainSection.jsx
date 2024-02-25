import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./HamburgerMainSection.css"

/**
 * *Section where the main YouTube categories are in the hamburger menu
*/


export default function HamburguerMainSection(){

    return(
      <>
      <section className="hamburger-container-section">
        <section className="hamburger-main-section">
          <SectionBtn image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/800px-Home-icon.svg.png" title="Home" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png" title="Shorts" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" title="Subscriptions" uid="sections-options"></SectionBtn>
        </section>
      </section>
      </>
    )
}