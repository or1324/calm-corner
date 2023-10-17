import React from "react";
import Page from "./Page";
import { ReactComponent as CalmCornerLogo } from '../assets/icons/logo.svg';
import { ReactComponent as SunsetIllusration } from '../assets/icons/SunsetIllusration.svg';
import HomeNavigation from "./HomeNavigation";
import { useIsPhone } from "../utils/hooks/IsPhone";
import '../assets/styles/HomePage.scss'
import NavigationBar from "./NavigationBar";

function HomePage() {
    const isPhone=useIsPhone()
    return (<Page>
       {isPhone?<NavigationBar/>: <div className='homepage-logo'><CalmCornerLogo /></div>}
        <div className='homepage-quete'>
            <SunsetIllusration />
            <figure>
                <q>טרגדיה צריכה לשמש בתור מקור עוצמה. לא משנה אילו קשיים, עד כמה כואבת החוויה, אם אנו מאבדים את התקווה זהו האסון האמיתי</q>
                <figcaption> הדאלי למה </figcaption>
            </figure>
        </div>
        <p className="description">
            ברוכים הבאים לCalm Corner - אתר שנוצר בכדי לעזור לכם להירגע מהמצב המלחיץ של המלחמה.<br />
            מתעסוקה מועילה עד למוקדי תמיכה - כל מה שאתם צריכים נמצא פה.
        </p>
        <HomeNavigation />

        {/*  */}
    </Page>);

}

export default HomePage;