import React from "react";
import "../assets/styles/Section.css";
function Section(props) {
  return (
    <div>
      <div className="section_header">
        <h2>{props.title}</h2>
      </div>
      <div className="section_content">{props.children}</div>
    </div>
  );
}

export default Section;
