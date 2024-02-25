import React from "react"
import "./IconBtn.css"

/**
 * *Icon button mostly used in navigation bar
*/

export function IconBtn(props){

/**
    *Function used so that the hamburger menu can be displayed
*/

    const {image, clas, onClick} = props
    const handleShowMenu = (e) => {
        onClick()
      }

    return(
        <button className={clas} onClick={handleShowMenu}>
            <img className="icon" src={image}></img>
        </button>
    )
}