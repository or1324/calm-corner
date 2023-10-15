import React from "react";
import "../assets/styles/NavigationCard.css"


function NavigationCard(props) {
    return (
        <div className="navigation-card">
            <a href={props.link}>
                <img className="navigation-card-icon" src={props.image} alt={props.alt} />
                <p className="navigation-card-text">{props.title}</p>
            </a>
        </div>
    );

}

export default NavigationCard;