import React, { useState } from "react";
import "../assets/styles/StoryItem.css";
const StoryItem = (props) => {
  const [read_more, set_read_more] = useState(false);
  return (
    <div
      className={
        read_more
          ? "story_item_container_read_more"
          : "story_item_container_read_less"
      }
    >
      <div className="story_item_header">
        <span>
          {"הסיפור של"}{" "}
          <span className="story_item_name">{props.writerName}</span>
        </span>
      </div>
      <span>{props.timestamp}</span>

      <p
        className={
          read_more ? "story_item_main_read_more" : "story_item_main_read_less"
        }
      >
        {props.storyText}
      </p>

      <div className="story_item_footer">
        <button type="button"
          onClick={handleClick}
        >
          {read_more ? "קרא פחות >>" : "קרא עוד >>"}
        </button>
      </div>
    </div>
  );

  function handleClick() {
    set_read_more(!read_more);
  }

};

export default StoryItem;
