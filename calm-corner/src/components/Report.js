import React from "react";
import "../assets/styles/Report.css";
const Report = (props) => {
  return (
    <div className="report_container">
      <p className="report_main">{props.report_main}</p>
      <div className="report_footer">
        <span className="report_time">{props.report_time}</span>
        <span className="report_location">{props.report_location}</span>

        <span className="reporter_name">,{props.reporter_name}</span>
      </div>
    </div>
  );
};

export default Report;
