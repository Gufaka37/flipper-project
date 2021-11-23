import React from "react";
import {GameCard} from "../../components/gameCard/GameCard";
import cubes from "../../imgs/gamesImages/dices2.png";
import "./mainPage.css";

export const MainPage = () => {
    return (
        <div className="gamesContainer">
            <div className="row">
                <div className="col s4">
                    <GameCard title="Dices!" img={cubes} url="/games/dices" description="Rolling dice. Get results fast! So cool, try it!!!" />
                </div>
                <div className="col s4"><GameCard title=""  /></div>
                <div className="col s4"><GameCard title=""  /></div>
            </div>
        </div>

    )
}