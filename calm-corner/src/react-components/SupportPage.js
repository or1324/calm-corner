import React from "react";
import "../assets/styles/SupportPage.css";
import NavPage from "./NavPage";
import MainSupportButton from "./MainSupportButton";
import ClalitLogo from "../assets/images/clalit_logo.png";
import EranLogo from "../assets/images/eran_logo.png";
import SaharLogo from "../assets/images/sahar_logo.png";
import Resilience from "./Resilience";

function SupportPage(props) {
  return (
    <div>
      <NavPage
        title="מוקדי תמיכה"
        explaination="בדף הזה ניתן לצלצל אל מוקד התמיכה המתאים."
      >
        <div className="main_support_buttons_container">
          <a href="tel:*2708" target="_blank">
            <MainSupportButton image={<img src={ClalitLogo} alt="כללית" />} />
          </a>
          <a href="tel:1201" target="_blank">
            <MainSupportButton image={<img src={EranLogo} alt="ערן" />} />
          </a>
          <a href="https://wa.me/972559571399" target="_blank">
            <MainSupportButton image={<img src={SaharLogo} alt="סהר" />} />
          </a>
        </div>
      </NavPage>
      <Resilience />
    </div>
  );
}

export default SupportPage;
