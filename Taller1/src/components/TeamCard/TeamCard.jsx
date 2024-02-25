import React from "react";
import "./TeamCard.css"

export const TeamCard = (props) => {
    const {logo, team, uid} = props
    return (
      <section className="team-card" id={uid}>  
        <img src={logo}/>    
        <p>{team}</p>
      </section>
    )
  }