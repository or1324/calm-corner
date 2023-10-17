import React from "react";
import "../assets/styles/ItemsContainer.css";
const ReportsContainer = (props) => {
  return (
    <div className="reports_container">
      {props.reportsList}
    </div>
  );
};

export default ReportsContainer;
