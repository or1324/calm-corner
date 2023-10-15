import React from "react";
import "../assets/styles/ResilienceButton.css";
function ResilienceButton(props) {
  // Add the content of your ResilienceButton here
  return (
    <div className="resilience_button_container">
      <div className="resilience_city">{props.city}</div>
    </div>
  );
}

export default ResilienceButton;
