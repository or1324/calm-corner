import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, query } from "firebase/firestore";

const firebaseApp = {
    // Your Firebase configuration
    apiKey: "AIzaSyBbP7kIgx-T7fjpAxGOeUXlP7oVOBTt7zo",
    authDomain: "calm-corner.firebaseapp.com",
    projectId: "calm-corner",
    storageBucket: "calm-corner.appspot.com",
    messagingSenderId: "222080893820",
    appId: "1:222080893820:web:e96b33136d939dcb661af9",
    measurementId: "G-SD3D1D0LVF"
};

const app = initializeApp(firebaseApp);
const db = getFirestore(app);
const storiesCollection = collection(db, "stories");
const reportsCollection = collection(db, "reports");

//------------------------------------------------------------
function createStory(wirter, storyParagraph) {
    return {
        writerName: wirter,
        storyText: storyParagraph,
        timestamp: new Date().getTime(), // Use the current timestamp
        showStory: false, // Set to true to show the story or false to hide it
    };
}


//add story
export async function addStory(wirter, storyText) {
    const storyObject = createStory(wirter, storyText);
    try {
        await addDoc(storiesCollection, storyObject);
    } catch (error) {
        console.error("Error adding story:", error);
    }
}


//get back all the stories from the firestore
export function readStories() {
    var allStoriesList = [];
    getDocs(query(collection(db, "stories"))).then((snapshot) => {
        snapshot.forEach((doc) => {
            allStoriesList.push(doc.data())
        });
    }).catch((error) => {
        console.error("Error reading stories:", error);
    });
    return allStoriesList;
}

//-----------------------------------------------------

function createReport(wirter, reportContent, cityName) {
    return {
        writerName: wirter,
        reportContent: reportContent,
        city: cityName,
        timestamp: new Date().getTime(), // Use the current timestamp
        showReport: false, // Set to true to show the story or false to hide it
    };
}
//add report
export async function addReport(wirter, reportContent, cityName) {
    const reporObject = createReport(wirter, reportContent,cityName);
    try {
        await addDoc(reportsCollection, reporObject);
    } catch (error) {
        console.error("Error adding report:", error);
    }
}

//get back all the reports from the firestore
export function readReports() {
    var allReportsList = [];
    getDocs(collection(db, "reports")).then((snapshot) => {
        snapshot.forEach((doc) => {
            allReportsList.push(doc.data())
        });
    }).catch((error) => {
        console.error("Error reading reports:", error);
    });
    
    return allReportsList;
}
//-----------------------------------------------------------------

