import React from "react";
import NavPage from "./NavPage";
import '../assets/styles/CalmingPage.css'
import Section from "./Section";
import NavigationBar from "./NavigationBar";
import CalmingContainer from "./CalmingContainer";

function CalmingPage() {
    
    return (<NavPage title='שיטות הרגעה' explaination='בדף הזה אתם מוזמנים להירגע מהמצב המלחיץ.'>
      <div>
        <Section title='איך לנשום בכדי להרגע?'>
        <CalmingContainer />    
        </Section>

        <Section title="סרטונים שיעזרו לכם להרגע"> 
        <div className="video-gallery">
        <iframe src="https://www.youtube.com/embed/Q-z4Bm3z0XU?si=Ves14X2hGhkeqWrh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/uUjj-nLN7gE?si=8H3zeLO4WhymWJVg"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/ANaIS9-o0Dw?si=egvNI0Ryk8pAIGDg"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="link"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </Section>
      </div>
    </NavPage>);
}

export default CalmingPage;