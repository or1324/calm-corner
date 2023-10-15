import {addReport} from "../utils/firebaseUtils";
import Form from "./Form";
function ReportForm() {
    return (<Form title="הוספת דיווח"
    showDropdown={true}
    detailsPlaceHolder="פרטי הדיווח"
    buttonTitle="הוסיפו דיווח"
    onSubmit={handleSubmit} />);
}

function handleSubmit(data) {
    addReport(data.name, data.details, data.city);
}
export default ReportForm;