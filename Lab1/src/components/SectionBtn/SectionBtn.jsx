import React from "react"
import "./SectionBtn.css"

export function SectionBtn(props){
    const {image, title} = props
    return(
        <button className="section-btn">
            <img className="section-img" src={image}></img>
            <p>{title}</p>
        </button>
    )
}