import React from "react"
import "./SectionBtn.css"

export function SectionBtn(props){
    const {image, title, clas, uid} = props
    return(
        <button className="section-btn" id={uid}>
            <img className={clas} src={image}></img>
            <p>{title}</p>
        </button>
    )
}