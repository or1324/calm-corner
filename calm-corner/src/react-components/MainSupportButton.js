import React from "react";
import "../assets/styles/MainSupportButton.css";
function MainSupportButton(props) {
  // Add the content of your MainSupportButton here
  return (
    <div className="support_button_container">
      <div className="support_image_container">{props.image}</div>
    </div>
  );
}

export default MainSupportButton;
