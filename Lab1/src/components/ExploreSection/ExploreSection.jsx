import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./ExploreSection.css"

export default function ExploreSection(){
    return(
      <>
      <section className="explore-section">
      <h2>Explore</h2>
      <section className="btn-section">
      <SectionBtn image="https://static.thenounproject.com/png/1126650-200.png" title="Trending" uid="sections-options2"></SectionBtn>
      <SectionBtn image="https://static-00.iconduck.com/assets.00/music-note-icon-841x1024-ltjvo7h6.png" title="Music" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png" title="Live" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://cdn-icons-png.freepik.com/512/7713/7713741.png" title="Gaming" uid="sections-options2"></SectionBtn>
      <SectionBtn image="https://cdn.iconscout.com/icon/free/png-256/free-news-471-861784.png" title="News" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://i.pinimg.com/originals/c7/4b/96/c74b96db767d8da61089915c11fda0f4.png" title="Sports" uid="sections-options"></SectionBtn>
      <SectionBtn image="https://pixsector.com/cache/cec946a5/avde0e25d106d5c8b716b.png" title="Learning" uid="sections-options2"></SectionBtn>
      </section>
      </section>
      </>
    )
}