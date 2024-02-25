import React from "react"
import "./CategoryBtn.css"

/**
 * *Button that goes at the top of the video section where the categories related to the content you watch are located
*/

export function CategoryBtn(props){
    const {name} = props
    return(
        <button className="category">
            <p>{name}</p>
        </button>
    )
}