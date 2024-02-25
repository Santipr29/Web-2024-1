import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { TeamCard } from "../TeamCard/TeamCard";
import { point } from "../../data/point";
import { fail } from "../../data/fail";
import { teams1 } from "../../data/teams";
import { teams2 } from "../../data/teams";

export const Body = () => {
    const [currentCounter, setCurrentCounter] = useState(0);
    const [currentCounter2, setCurrentCounter2] = useState(0);
    const [randomTeam1, setRandomTeam1] = useState(null);
    const [randomTeam2, setRandomTeam2] = useState(null);
    const [randomGift, setRandomGift] = useState(null);

    const selectRandomTeams = () => {
        const randomIndex1 = Math.floor(Math.random() * teams1.length);
        const randomIndex2 = Math.floor(Math.random() * teams2.length);
        setRandomTeam1(teams1[randomIndex1]);
        setRandomTeam2(teams2[randomIndex2]);
    };

    const selectRandomGift = (type) => {
        const randomIndex = Math.floor(Math.random() * (type === "fail" ? fail.length : point.length));
        setRandomGift(type === "fail" ? fail[randomIndex] : point[randomIndex]);
    };

    const changeCounter = (type) => {
        if (type === "add") {
            setCurrentCounter(currentCounter + 1);
            selectRandomGift("point");
        } else if (type === "substract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1);
            selectRandomGift("fail");
        } else if (type === "reset") {
            setCurrentCounter(0);
            setCurrentCounter2(0);
            selectRandomTeams();
            setRandomGift(null);
        }
    };

    const changeCounter2 = (type) => {
        if (type === "add2") {
            setCurrentCounter2(currentCounter2 + 1);
            selectRandomGift("point");
        } else if (type === "substract2" && currentCounter2 > 0) {
            setCurrentCounter2(currentCounter2 - 1);
            selectRandomGift("fail");
        } else if (type === "reset") {
            setCurrentCounter(0);
            setCurrentCounter2(0);
            selectRandomTeams();
            setRandomGift(null);
        }
    };

    useState(() => {
        selectRandomTeams();
    }, []);


    return (
        <>
        <section className="container">
            <section className="gift-point">
                <img src={randomGift?.gift}/>
            </section>

            <section className="team-1">
                <section>
                    <TeamCard logo={randomTeam1?.logo} team={randomTeam1?.name}/>
                    <Counter count={currentCounter} />
                </section>
                <section className="buttons-div">
                    <Button title="-" type="substract" onClick={changeCounter}></Button>
                    <Button title="Reset" type="reset" onClick={changeCounter}></Button>
                    <Button title="+" type="add" onClick={changeCounter}></Button>
                </section>
            </section>

            <section className="team-2">
                <section>
                    <TeamCard logo={randomTeam2?.logo} team={randomTeam2?.name}/>
                    <Counter count={currentCounter2} />
                </section>
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