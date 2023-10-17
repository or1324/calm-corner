import React from "react";
import {useEffect, useState} from "react";
import NavPage from "./NavPage";
import StoryForm from "./StoryForm";
import ItemsContainer from "./ItemsContainer";
import { readStories } from "../utils/firebaseUtils";
import StoryItem from "./StoryItem";
import SideBySideContainer from "./SideBySideContainer";
function ReportPage() {
    var [componentsList, setComponentsList] = useState([]);
    useEffect(()=> {
        readStories().then((storiesList) => {
            var tempList = [];
            var index = 0;
            storiesList.forEach((story) => {
                if (story.showStory) {
                    tempList.push(<StoryItem key={index} storyText={story.storyText} writerName={story.writerName} timestamp={new Date(story.timestamp).toLocaleString()} />);
                    index++;
                }
            });
            setComponentsList(tempList);
        });
    }, []);
        return  (<NavPage title="סיפורים אישיים" explaination="בדף הזה אתם מוזמנים לשתף סיפורים חיוביים על דרכי ההתמודדות שלכם עם המצב, ולקרוא סיפורים של אחרים.">
            <SideBySideContainer>
                <StoryForm />
                <ItemsContainer reportsList={componentsList}/>
            </SideBySideContainer>
        </NavPage>);
}

export default ReportPage;