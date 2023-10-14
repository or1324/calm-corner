import React from "react";
import NavPage from "./NavPage";
import ReportForm from "./ReportForm";
import ReportsContainer from "./ReportsContainer";
import { readReports } from "../utils/firebaseUtils";
function ReportPage() {
    return (<NavPage title="דיווחים מהשטח" explaination="בדף הזה אתם יכולים לדווח על אירועים שקורים אצלכם באיזור על מנת לעזור לאנשים בסביבתכם לדעת מה הולך באיזור שלכם.
    נוסף על כך, באפשרותכם לראות בעצמכם את הדיווחים של שאר האנשים.">
        <ReportForm />
        <ReportsContainer reportsList={readReports()}/>
    </NavPage>);
}

export default ReportPage;