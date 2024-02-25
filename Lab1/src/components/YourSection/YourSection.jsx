import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./YourSection.css"
import { you } from "../../data/youSection"

/**
 * *User's own section to view video lists
*/

export default function YourSection(){
    return(
      <>
      <section className="your-section">
        <h2>You</h2>
        <section className="btn-section">
        {you.map((card, id)=>(
          <SectionBtn image={card.img} title={card.tittle} uid={card.uid} key={id}></SectionBtn>
        ))}
        </section>
      </section>
      </>
    )
}