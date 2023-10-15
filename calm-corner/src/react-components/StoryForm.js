import {addStory} from "../utils/firebaseUtils";
import Form from "./Form";
function StoryForm() {
    return (<Form title="הוספת סיפור"
    showDropdown={true}
    detailsPlaceHolder="פרטי הסיפור"
    buttonTitle="הוסיפו סיפור"
    onSubmit={handleSubmit} />);
}

function handleSubmit(data) {
    addStory(data.name, data.city, data.details);
}
export default StoryForm;