import React from "react";
import "../assets/styles/Page.css";
import Footer from "./Footer";
function Page(props) {
  // Add the content of your page here
  return (
    <div id="body">
      {props.children}
      <Footer/>
    </div>
    );
}

export default Page;
