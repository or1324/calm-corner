import React from "react";
import "../assets/styles/CalmingContainer.css";
import CalmingItem from "./CalmingItem";
import arrowIcon from "../assets/images/arrow-icon.png";




function CalmingContainer(props) {
  

    const calmingItems = [
        "נשמו מהאף למשך 4 שניות",
        "עצרו את הנשימה למשך 7 שניות",
        "נשפו מהפה במשך 8 שניות",
        "חזרו על התהליך",
      ];


  return (
    <div className="calming-container">
     
     {calmingItems.map((item, index) => (
        <div className="step-container" key={index}>
          <CalmingItem text={item} />
          {index < calmingItems.length - 1 && (
            <div className="arrow-icon">
              <img src={arrowIcon} alt={`Arrow ${index}`} />
            </div>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default CalmingContainer;
