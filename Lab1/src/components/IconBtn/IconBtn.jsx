import React from "react"

export function IconBtn(props){
    const {image} = props
    return(
        <button>
            <img src={image}></img>
        </button>
    )
}