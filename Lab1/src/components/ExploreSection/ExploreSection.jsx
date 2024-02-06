import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"

export default function ExploreSection(){
    return(
      <>
      <section>
      <h2>Explore</h2>
      <SectionBtn image="https://static.thenounproject.com/png/1126650-200.png" title="Trending"></SectionBtn>
      <SectionBtn image="https://static-00.iconduck.com/assets.00/music-note-icon-841x1024-ltjvo7h6.png" title="Music"></SectionBtn>
      <SectionBtn image="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png" title="Live"></SectionBtn>
      <SectionBtn image="https://cdn-icons-png.freepik.com/512/7713/7713741.png" title="Gaming"></SectionBtn>
      <SectionBtn image="https://cdn.iconscout.com/icon/free/png-256/free-news-471-861784.png" title="News"></SectionBtn>
      <SectionBtn image="https://i.pinimg.com/originals/c7/4b/96/c74b96db767d8da61089915c11fda0f4.png" title="Sports"></SectionBtn>
      <SectionBtn image="https://pixsector.com/cache/cec946a5/avde0e25d106d5c8b716b.png" title="Learning"></SectionBtn>
      </section>
      </>
    )
}