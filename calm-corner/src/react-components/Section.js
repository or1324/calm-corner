import React from "react";
import "../assets/styles/Section.css";
function Section(props) {
  return (
    <div>
      {props.children}
      <div class="section_header">
        <h2>{props.title}</h2>
      </div>
      <div class="section_content">
          {props.content}
      </div>
    </div>
  );
}

export default Section;
