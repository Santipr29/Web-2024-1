import React from 'react'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Count } from './components/Counter/Counter'
import './App.css'


export  default function App() {

    const [Counter,setCounter] = useState(0)
    const Calculate = (e) =>{
        if (e === "add") {
            setCounter(Counter +1 )
        }
        if (e === "substract") {
            if (Counter > 0) {
                setCounter(Counter - 1);
            }
        }
        if (e === "reset") {
            setCounter(0)
        }
    }

    return (
    <>
        <Button title="+1" types="add" onClick={Calculate()}/>
        
        <Button title="-1" types="substract" onClick={Calculate()}/>

        <Button title="Reset" types="reset" onClick={Calculate()}/>

        <Count counter={Counter}/>

    </>
    )
}