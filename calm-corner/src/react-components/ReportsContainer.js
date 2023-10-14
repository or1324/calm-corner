import React from "react";
import "../assets/styles/ReportsContainer.css";
import ReportItem from "./ReportItem";
const ReportsContainer = (props) => {
  return (
    <div className="reports_container">
      {console.log(props.reportsList)}
      {props.reportsList.forEach((report) => {
        {console.log(report.showReport)}
        if (report.showReport)
          (<ReportItem report_main={report.reportContent} reporter_name={report.writer_name} report_time={new Date(report.timestamp).toDateString()} report_location={report.city} />)
      })}
    </div>
  );
};

export default ReportsContainer;
