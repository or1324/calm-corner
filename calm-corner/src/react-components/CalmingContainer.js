import React from "react";
import "../assets/styles/CalmingContainer.css";
import CalmingItem from "./CalmingItem";
import arrowIconDesktop from "../assets/images/arrow-icon-desktop.png";
import arrowIconMobile from "../assets/images/arrow-icon-mobile.png";


function CalmingContainer() {
  

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
              <img src={arrowIconDesktop} className="desktopArrow" alt={`Arrow ${index}`} />
              <img src={arrowIconMobile} className="mobileArrow" alt={`Arrow ${index}`} />
            </div>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default CalmingContainer;
