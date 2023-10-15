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
        <NavigationCard image={firstAidIcon} title={"עזרה ראשונה"}></NavigationCard>
        <NavigationCard image={signalIcon} title={"דיווחים מהשטח"}></NavigationCard>
        <NavigationCard image={storiesIcon} title={"סיפורים אישיים"}></NavigationCard>
        <NavigationCard image={methodsIcon} title={"שיטות הרגעה"}></NavigationCard>
        <NavigationCard image={supportIcon} title={"מוקדי תמיכה"}></NavigationCard>
        </div>
    );

}


export default HomeNavigation;