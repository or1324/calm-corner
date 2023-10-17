import React from "react";
import "../assets/styles/CalmingItem.css";
function CalmingItem(props) {
  return (
    <div className="calming-item">
      <div className="claming-text-item">  {props.text} </div>
    </div>
  );
};

export default CalmingItem;
