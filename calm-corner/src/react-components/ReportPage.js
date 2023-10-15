import React from "react";
import {useEffect, useState} from "react";
import NavPage from "./NavPage";
import ReportForm from "./ReportForm";
import ReportsContainer from "./ReportsContainer";
import { readReports } from "../utils/firebaseUtils";
import ReportItem from "./ReportItem";
function ReportPage() {
    var [componentsList, setComponentsList] = useState([]);
    useEffect(()=> {
        readReports().then((reportsList) => {
            var tempList = [];
            console.log(reportsList);
            var index = 0;
            reportsList.forEach((report) => {
                console.log(report.showReport);
                if (report.showReport) {
                    tempList.push(<ReportItem key={index} report_main={report.reportContent} reporter_name={report.writerName} report_time={new Date(report.timestamp).toLocaleString()} report_location={report.city} />);
                    index++;
                }
            });
            setComponentsList(tempList);
        });
    }, []);
        return  (<NavPage title="דיווחים מהשטח" explaination="בדף הזה אתם יכולים לדווח על אירועים שקורים אצלכם באיזור על מנת לעזור לאנשים בסביבתכם לדעת מה הולך באיזור שלכם.
        נוסף על כך, באפשרותכם לראות בעצמכם את הדיווחים של שאר האנשים.">
            <ReportForm />
            <ReportsContainer reportsList={componentsList}/>
        </NavPage>);
}

export default ReportPage;