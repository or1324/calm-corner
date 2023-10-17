import React from "react";
import "../assets/styles/FormAndItemsContainer.css";
function FormAndItemsContainer(props) {
  return (
    <div id="form_and_items_container">
      {props.children}
    </div>
  );
};

export default FormAndItemsContainer;
