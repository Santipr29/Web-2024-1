import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./ExploreSection.css"
import { explore } from "../../data/explore"

/**
 * *Section where there are different categories to explore on YouTube in the hamburger menu
*/


export default function ExploreSection(){
    return(
      <>
      <section className="explore-section">
      <h2>Explore</h2>
      <section className="btn-section">
        {explore.map((card, id)=>(
          <SectionBtn image={card.img} title={card.tittle} uid={card.uid} key={id}></SectionBtn>
        ))}
      </section>
      </section>
      </>
    )
}