import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { point } from "../../data/point";
import { fail } from "../../data/fail";

export const Body = () => {
    const [currentCounter, setCurrentCounter] = useState(0)
    const [currentCounter2, setCurrentCounter2] = useState(0)

    const changeCounter = (type) => {

        if (type === "add") {
            setCurrentCounter(currentCounter + 1)
        } else if (type === "substract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1)
        } else if (type === "reset") {
            setCurrentCounter(0)
            setCurrentCounter2(0)
        }

    }

    const changeCounter2 = (type) => {

        if (type === "add2") {
            setCurrentCounter2(currentCounter2 + 1)
        } else if (type === "substract2" && currentCounter2 > 0) {
            setCurrentCounter2(currentCounter2 - 1)
        } else if (type === "reset") {
            setCurrentCounter(0)
            setCurrentCounter2(0)
        }

    }

    return (
        <>
        <section className="container">
            <section className="gift-point">
                <img src=""/>
            </section>

            <section className="team-1">
                <Counter count={currentCounter}></Counter>
                <section className="buttons-div">
                    <Button title="-" type="substract" onClick={changeCounter}></Button>
                    <Button title="Reset" type="reset" onClick={changeCounter}></Button>
                    <Button title="+" type="add" onClick={changeCounter}></Button>
                </section>
            </section>

            <section className="team-2">
                <Counter count={currentCounter2}></Counter>
                <section className="buttons-div">
                    <Button title="-" type="substract2" onClick={changeCounter2}></Button>
                    <Button title="Reset" type="reset" onClick={changeCounter2}></Button>
                    <Button title="+" type="add2" onClick={changeCounter2}></Button>
                </section>
            </section>
        </section>
        </>

    );
};