import React from "react";
import "../assets/styles/ReportsContainer.css";
const ReportsContainer = (props) => {
  return (
    <div className="reports_container">
      {console.log(props.reportsList)}
      {props.reportsList}
    </div>
  );
};

export default ReportsContainer;
