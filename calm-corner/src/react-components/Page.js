import React from "react";
import "../assets/styles/Page.scss";
import Footer from "./Footer";
function Page(props) {
  // Add the content of your page here
  return (
    <div id="body">
      <div className="main-container">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
