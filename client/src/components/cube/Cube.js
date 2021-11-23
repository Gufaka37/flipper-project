import React from "react";
import "./cube.css";
import {ReactComponent as Cube1} from '../../imgs/dices/cube_1.svg';
import {ReactComponent as Cube2} from '../../imgs/dices/cube_2.svg';
import {ReactComponent as Cube3} from '../../imgs/dices/cube_3.svg';
import {ReactComponent as Cube4} from '../../imgs/dices/cube_4.svg';
import {ReactComponent as Cube5} from '../../imgs/dices/cube_5.svg';
import {ReactComponent as Cube6} from '../../imgs/dices/cube_6.svg';


export const Cube = ({cubeNumber, styleProp, classNameProp}) => {

    switch (cubeNumber) {
        case 2:
            return (
                <div className={`cube ${styleProp}`} >
                    <Cube2 className={classNameProp} />
                </div>
            );
        case 3:
            return (
                <div className={`cube ${styleProp}`} >
                    <Cube3 className={classNameProp} />
                </div>
            );
        case 4:
            return (
                <div className={`cube ${styleProp}`} >
                    <Cube4 className={classNameProp} />
                </div>
            );
        case 5:
            return (
                <div className={`cube ${styleProp}`} >
                    <Cube5 className={classNameProp} />
                </div>
            );
        case 6:
            return (
                <div className={`cube ${styleProp}`} >
                    <Cube6 className={classNameProp} />
                </div>
            );
        default:
            return (
                <div className={`cube ${styleProp}`} >
                    <Cube1 className={classNameProp} />
                </div>
            );
    }
}

