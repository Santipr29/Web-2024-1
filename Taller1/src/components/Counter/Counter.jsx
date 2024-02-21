import React, {useState} from "react";

export function Count (props){
    const {counter} = props 
    return(
        <>
        <p>{counter}</p>
        </>
    )
}