import React, {useEffect, useState} from "react";
import "./scoreDisplay.css";
import {Cube} from "../cube/Cube";

export const ScoreDisplay = ({dicesValues}) => {
    const [pairs, setPairs] = useState([]);
    const [counter, setCounter] = useState();

    useEffect(() => {
        let values = dicesValues;
        let newValues = [];
        let flag = false;
        values.forEach((currentValue) => {
            let count = 0;
            let arr = [];
            newValues.forEach((value) => {
                if (value[0] === currentValue)
                    flag = true;
            });
            if (!flag) {
                values.forEach((nextValue) => {
                    if (currentValue === nextValue)
                        count++;
                });
                arr.push(currentValue);
                arr.push(count);
                newValues.push(arr);
            }
            flag = false;
        });
        setPairs(newValues);
    }, [dicesValues]);

    useEffect(() => {
        const count = dicesValues.reduce((prev, curr) => prev + curr);
        setCounter(count);
    }, [dicesValues]);

    return (
      <div className="card score-display">
          <div className="card-content no-padding dices-display">
              {
                  pairs.map((pair) => {
                      return (
                          <div className="score-block" key={pair.toString()}>
                              <Cube styleProp={"small-dice"} classNameProp={"newColors"} cubeNumber={pair[0]} />
                              <p>: {pair[1]}</p>
                          </div>
                      )
                  })
              }
          </div>
          <div className="final-score">
            <p>{counter}</p>
          </div>
      </div>
    );
}