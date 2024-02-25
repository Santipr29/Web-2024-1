import React from "react";

export const TeamCard = (props) => {
    const {logo, team} = props
    return (
      <section>  
        <img src={logo}/>    
        <h3>{team}</h3>
      </section>
    )
  }