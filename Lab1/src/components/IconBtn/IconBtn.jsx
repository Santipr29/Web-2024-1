import React from "react"
import "./IconBtn.css"

export function IconBtn(props){
    const {image, clas} = props
    return(
        <button className={clas}>
            <img className="icon" src={image}></img>
        </button>
    )
}