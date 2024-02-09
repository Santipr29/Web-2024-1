import React from "react"
import "./CategoryBtn.css"

export function CategoryBtn(props){
    const {name} = props
    return(
        <button className="category">
            <p>{name}</p>
        </button>
    )
}