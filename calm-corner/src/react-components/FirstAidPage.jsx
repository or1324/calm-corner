import React from "react";
import NavPage from "./NavPage";
import '../assets/styles/FirstAidPage.scss'

function FirstAidPage() {
    return (<NavPage title='עזרה ראשונה' explaination='בדף הזה אתם מוזמנים ללמוד כיצד לפעול במקרה שבו תוכלו לעזור לאנשים הזקוקים לכך.'>
        <div className="video-gallery">
        <iframe src="https://www.youtube.com/embed/OXEf15lAEMQ" title="כיצד לעצור דימומים" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/jCHtTypTFic" title="חבישת &quot;דגל אנגליה&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
        
        </div>
    </NavPage>);
}

export default FirstAidPage;