import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./MoreSection.css"

export default function MoreSection(){
    return(
      <>
      <section className="yt-section">
      <h2>More from YouTube</h2>
      <section className="btn-section">
      <SectionBtn image="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" title="YouTube Premium" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://static.vecteezy.com/system/resources/previews/017/396/826/original/youtube-studio-icons-free-png.png" title="YouTube Studio" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://static.vecteezy.com/system/resources/previews/017/395/384/original/youtube-music-icon-free-png.png" title="YouTube Music" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://i.pinimg.com/originals/41/e8/20/41e82046cd52130a111049ea560cfbda.png" title="YouTube Kids" uid="sections-options"></SectionBtn>
      </section>
      </section>
      </>
    )
}