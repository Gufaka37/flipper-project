import React from "react";
import config from "../../config/default.json";
import "./gameCard.css";



export const GameCard = ({title, img, url, description}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.assign(`${config.baseUrl}${url}`);
    }

    return (
        <div className="card gameCard" onClick={handleClick}>
            <div className="card-content gameCard-content">
                <span className="card-title">
                    <p>
                        {title}
                    </p>
                </span>
            </div>
            <div>
                <span className="card-title gameCard-title">
                <p>{`${description}`}</p>
            </span>
            </div>

            <div className="card-reveal">
                <div className="card-image gameCard-image">
                    <img src={img} alt={img}/>
                </div>
            </div>
        </div>
    );
}