import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";

export const Body = () => {
    const [currentCounter, setCurrentCounter] = useState(0)

    const changeCounter = (type) => {

        if (type === "add") {
            setCurrentCounter(currentCounter + 1)
        } else if (type === "substract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1)
        } else if (type === "reset") {
            setCurrentCounter(0)
        }

    }

    return (
        <>
            <Counter count={currentCounter}></Counter>
            <section className="buttons-div">
                <Button title="-" type="substract" onClick={changeCounter}></Button>
                <Button title="Reset" type="reset" onClick={changeCounter}></Button>
                <Button title="+" type="add" onClick={changeCounter}></Button>
            </section>
        </>

    );
};