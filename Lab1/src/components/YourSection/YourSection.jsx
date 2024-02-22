import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./YourSection.css"

export default function YourSection(){
    return(
      <>
      <section className="your-section">
        <h2>You</h2>
        <section className="btn-section">
          <SectionBtn image="https://static.thenounproject.com/png/578286-200.png" title="Your channel" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" title="History" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://static.thenounproject.com/png/4693940-200.png" title="Your videos" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://static-00.iconduck.com/assets.00/time-icon-256x256-3vd21cb8.png" title="Watch later" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://www.iconpacks.net/icons/1/free-scissors-icon-981-thumb.png" title="Your clips" uid="sections-options"></SectionBtn>
          <SectionBtn image="https://www.freeiconspng.com/uploads/like-icon-0.png" title="Liked videos" uid="sections-options"></SectionBtn>
        </section>
      </section>
      </>
    )
}