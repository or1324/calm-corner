import React from "react";
import "../assets/styles/Section.css";
function Section(props) {
  return (
    <div>
      {props.children}
      <div class="section_header">
        <h2>כותרת</h2>
      </div>
      <div class="section_content">
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש
          שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ
          אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
        </p>
      </div>
    </div>
  );
}

export default Section;
