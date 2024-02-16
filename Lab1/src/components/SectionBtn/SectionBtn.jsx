import React from "react"
import "./SectionBtn.css"

export function SectionBtn(props){
    const {image, title, uid} = props
    return(
        <button className="section-btn">
            <img id={uid} src={image}></img>
            <p>{title}</p>
        </button>
    )
}