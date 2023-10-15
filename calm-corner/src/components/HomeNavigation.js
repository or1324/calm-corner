import React from "react";
import "../assets/styles/HomeNavigation.css"
import NavigationCard from "./NavigationCard";
import firstAidIcon from "../assets/images/first-aid-icon.png"
import methodsIcon from "../assets/images/methods-icon.png"
import signalIcon from "../assets/images/signal-icon.png"
import storiesIcon from "../assets/images/stories-icon.png"
import supportIcon from "../assets/images/support-icon.png"


function HomeNavigation(props) {
    return (<div className="navigation-container">
        <NavigationCard  onClick={() => alert("Hello from here")} image={firstAidIcon} text={"עזרה ראשונה"}></NavigationCard>
        <NavigationCard image={signalIcon} text={"דיווחים מהשטח"}></NavigationCard>
        <NavigationCard image={storiesIcon} text={"סיפורים אישיים"}></NavigationCard>
        <NavigationCard image={methodsIcon} text={"שיטות הרגעה"}></NavigationCard>
        <NavigationCard image={supportIcon} text={"מוקדי תמיכה"}></NavigationCard>
        </div>
    );

}

export default HomeNavigation;