import React from "react";
import "../assets/styles/NavigationCard.css"


function NavigationCard(props) {
    return (
        <div onClick={() => alert("Hello from here")} className="navigation-card">
            <a href={props.link}>
                <img className="navigation-card-icon" src={props.image} alt={props.alt} />
                <p className="navigation-card-text">{props.text}</p>
            </a>
        </div>
    );

}

export default NavigationCard;