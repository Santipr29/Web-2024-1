import React from "react"

export function CategoryBtn(props){
    const {name} = props
    return(
        <button>
            <p>{name}</p>
        </button>
    )
}