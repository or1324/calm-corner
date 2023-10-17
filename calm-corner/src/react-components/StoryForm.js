import {addStory} from "../utils/firebaseUtils";
import Form from "./Form";
function StoryForm() {
    return (<Form title="הוספת סיפור"
    showDropdown={false}
    detailsPlaceHolder="פרטי הסיפור"
    buttonTitle="הוסיפו סיפור"
    onSubmit={handleSubmit} />);
}

function handleSubmit(data) {
    addStory(data.name, data.details);
}
export default StoryForm;