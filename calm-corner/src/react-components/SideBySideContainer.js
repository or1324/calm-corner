import React from "react";
import "../assets/styles/SideBySideContainer.css";
function SideBySideContainer(props) {
  return (
    <div id="side_by_side_container">
      {props.children}
    </div>
  );
};

export default SideBySideContainer;
