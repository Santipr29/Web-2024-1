import React from "react"
import "./SectionBtn.css"

/**
 * *Button component to go to the different categories of YouTube
*/

export function SectionBtn(props){
    const {image, title, clas, uid} = props
    return(
        <button className="section-btn" id={uid}>
            <img className={clas} src={image}></img>
            <p>{title}</p>
        </button>
    )
}