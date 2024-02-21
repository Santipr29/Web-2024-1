import React from "react"
import "./IconBtn.css"

export function IconBtn(props){
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