import React from "react";
import "../assets/styles/HomeNavigation.scss"
import NavigationCard from "./NavigationCard";

import { Link } from 'react-router-dom';

import firstAidIcon from "../assets/images/first-aid-icon.png"
import methodsIcon from "../assets/images/methods-icon.png"
import signalIcon from "../assets/images/signal-icon.png"
import storiesIcon from "../assets/images/stories-icon.png"
import supportIcon from "../assets/images/support-icon.png"
import Section from "./Section";


function HomeNavigation(props) {
    
    return (<div className="navigation-container">
        
      <Section content=""></Section>

      
       
      <Link to={'/מוקדי-תמיכה'} style={{ textDecoration: 'none' }}>
        <NavigationCard image={supportIcon} title={"מוקדי תמיכה"}></NavigationCard>
        </Link>

        <Link to={'/שיטות-הרגעה'} style={{ textDecoration: 'none' }}>
        <NavigationCard image={methodsIcon} title={"שיטות הרגעה"}></NavigationCard>
        </Link>

        <Link to={'/סיפורים-אישיים'} style={{ textDecoration: 'none' }}>
        <NavigationCard image={storiesIcon} title={"סיפורים אישיים"}></NavigationCard>
        </Link>

        <Link to={'/דיווחים-מהשטח'} style={{ textDecoration: 'none' }}>
        <NavigationCard image={signalIcon} title={"דיווחים מהשטח"}></NavigationCard>
        </Link>
        <Link to={'/עזרה-ראשונה'} style={{ textDecoration: 'none' }}>
        <NavigationCard image={firstAidIcon} title={"עזרה ראשונה"} ></NavigationCard>
        </Link>
        </div>
    );

}


export default HomeNavigation;