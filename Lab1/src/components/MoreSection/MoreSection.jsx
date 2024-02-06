import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"

export default function MoreSection(){
    return(
      <>
      <section>
      <h2>More from YouTube</h2>
      <SectionBtn image="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" title="YouTube Premium"></SectionBtn>
      <SectionBtn image="https://static.vecteezy.com/system/resources/previews/017/396/826/original/youtube-studio-icons-free-png.png" title="YouTube Studio"></SectionBtn>
      <SectionBtn image="https://static.vecteezy.com/system/resources/previews/017/395/384/original/youtube-music-icon-free-png.png" title="YouTube Music"></SectionBtn>
      <SectionBtn image="https://i.pinimg.com/originals/41/e8/20/41e82046cd52130a111049ea560cfbda.png" title="YouTube Kids"></SectionBtn>
      </section>
      </>
    )
}