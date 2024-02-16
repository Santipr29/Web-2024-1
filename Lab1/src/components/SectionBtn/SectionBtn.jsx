import React from "react"
import "./SectionBtn.css"

export function SectionBtn(props){
    const {image, title, clas} = props
    return(
        <button className="section-btn">
            <img className={clas} src={image}></img>
            <p>{title}</p>
        </button>
    )
}