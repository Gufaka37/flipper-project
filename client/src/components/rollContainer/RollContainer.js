import React, {forwardRef, useImperativeHandle, useState} from "react";
import "./rollContainer.css"
import {Cube} from "../cube/Cube";

export const RollContainer = forwardRef(({updateDices}, ref) => {
    const [dices, setDices] = useState([1]);
    const [values, setValues] = useState([1])
    // const [coin, setCoin] = useState(false);

    useImperativeHandle(ref, () => ({
         rollDices() {
            let newValues = [];
            dices.forEach((dice) => {
                newValues.push(Math.floor(Math.random() * 6) + 1);
            });

            setValues(newValues);
            updateDices(dices, newValues);
        },

        addDice() {
             const newDices = [...dices, dices.length + 1];
             const newValues = [...values, 1];

             setDices(newDices);
             setValues(newValues);

             updateDices(newDices, newValues);
        },

        popDice() {
             const newDices = dices;
             const newValues = values;
             newDices.pop();
             newValues.pop();

             setDices([...newDices]);
             setValues([...newValues]);
             updateDices([...newDices], [...newValues]);
        },

        refreshDices() {
             const countDices = dices;
             const newValues = [];

             countDices.forEach((dice) => {
                 newValues.push(1);
             });

             setValues(newValues);
             updateDices(dices, newValues);
        }
    }));

    return (
        <div className="card roll-container">
            <div className="card-content roll-container-content">
                {
                    dices.map((dice) => {
                        return (
                           <Cube cubeNumber={values[dice - 1]} key={dice.toString()}/>
                        );
                    })
                }
            </div>
        </div>
    );
});
