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
          <span className="story_item_name">{props.StoryItem_name}</span>
        </span>
      </div>
      <span>{props.StoryItem.time}</span>

      <p
        className={
          read_more ? "story_item_main_read_more" : "story_item_main_read_less"
        }
      >
        {props.StoryItem.main}
      </p>

      <div className="story_item_footer">
        <button
          onClick={() => {
            set_read_more(!read_more);
          }}
        >
          {read_more ? "קרא פחות >>" : "קרא עוד >>"}
        </button>
      </div>
    </div>
  );
};

export default StoryItem;
