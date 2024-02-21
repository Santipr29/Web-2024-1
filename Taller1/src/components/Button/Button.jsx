import React, {useState} from "react";

export function Button (props){
    const {onClick, types, title, clas} = props 
    return(
        <>
        <button className={clas} onClick={()=>onClick(types)} >
            <p>{title}</p>
        </button>
      </>
    )
}