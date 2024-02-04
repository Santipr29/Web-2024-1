import React from "react"

export function SectionBtn(props){
    const {image, title} = props
    return(
        <button>
            <img src={image}></img>
            <p>{title}</p>
        </button>
    )
}