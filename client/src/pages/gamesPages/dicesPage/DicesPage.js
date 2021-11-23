import React, { useRef, useState } from "react";
import "./dicesPage.css";
import {RollContainer} from "../../../components/rollContainer/RollContainer";
import {ScoreDisplay} from "../../../components/scoreDisplay/ScoreDisplay";

export const DicesPage = () => {
    const [dices, setDices] = useState([1]);
    const [values, setValues] = useState([1]);
    const childRef = useRef();

    const updateDices = (dicesCount, dicesValues) => {
        setDices(dicesCount);
        setValues(dicesValues);
    }


    return (
        <div className="display">
            <ScoreDisplay dicesValues={values} />

            <RollContainer updateDices={updateDices} ref={childRef}  />

            <div className="control-buttons">
                <button
                    onClick={() => childRef.current.popDice()}
                    className={`controlButton_min ${dices.length === 1 ? "disabled" : ""}  waves-effect waves-light btn-large`}
                >
                    -
                </button>
                <button
                    onClick={() => childRef.current.rollDices()}
                    className="controlButton waves-effect waves-light btn-large"
                >
                    Roll
                </button>
                <button
                    onClick={() => childRef.current.addDice()}
                    className={`controlButton_min ${dices.length === 6 ? "disabled" : ""} waves-effect waves-light btn-large`}
                >
                    +
                </button>
                <button
                    onClick={() => childRef.current.refreshDices()}
                    className="refreshButton waves-effect waves-light btn-large"
                >
                    <i className="large material-icons">refresh</i>
                </button>
            </div>
        </div>
    );
}