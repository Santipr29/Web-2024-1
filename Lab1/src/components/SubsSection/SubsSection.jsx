import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import "./SubsSection.css"
import { subscriptions } from "../../data/subscriptions"

/**
 * *Section where the profiles to which the user is subscribed are
*/


export default function SubsSection(){

/**
    *The map is used to represent the profiles to which the user is subscribed based on data
*/

    return(
      <>
      <section className="subs-section">
      <h2>Subscriptions</h2>
      <section className="btn-section">
      {subscriptions.map((card, id)=>(
          <SectionBtn image={card.img} title={card.tittle} uid={card.uid} key={id}></SectionBtn>
        ))}
      </section>
      </section>
      </>
    )
}