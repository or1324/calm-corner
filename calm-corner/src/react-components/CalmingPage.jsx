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
        <iframe src="https://firebasestorage.googleapis.com/v0/b/calm-corner.appspot.com/o/40778784_2307054242823466_3227591891266974858_n.mp4?alt=media&token=e6c0dbcf-7308-4249-ba27-95ded5aec076&_gl=1*i9yx2v*_ga*Mzg5MDEyMDE0LjE2OTcwMjUwMTY.*_ga_CW55HF8NVT*MTY5NzU1MDIzOS4xMi4xLjE2OTc1NTQ2NDcuMzQuMC4w"  title="Instagram video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </Section>
      </div>
    </NavPage>);
}

export default CalmingPage;