import React from "react";
import "../assets/styles/Resilience.css";
import Section from "./Section";
import ResilienceButton from "./ResilienceButton";

function Resilience(props) {
  // Add the content of your SupportPage here
  return (
    <div className="resilience_container">
      <div className="resilience_text">
        <Section title="מוקדי חוסן">
          <p>
            מרכז “חוסן” הינו מרכז מקצועי העוסק בפיתוח תכניות לייעוץ ולהכשרה
            בתחום שיפור החוסן האישי, המוסדי והקהילתי. המרכז מפתח תכניות מניעה
            להתמודדות עם מצבי לחץ בחיי היום-יום, במצבי חירום וטראומה וכן תכניות
            למניעת אובדנות.
          </p>
        </Section>
        <ResilienceButton city="יהודה ושומרון" />
      </div>
    </div>
  );
}

export default Resilience;
