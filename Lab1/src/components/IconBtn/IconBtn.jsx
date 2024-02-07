import React from "react"
import "./IconBtn.css"

export function IconBtn(props){
    const {image} = props
    return(
        <button>
            <img className="icon" src={image}></img>
        </button>
    )
}