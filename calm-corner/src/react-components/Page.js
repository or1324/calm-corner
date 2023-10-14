import React from "react";
import "../assets/styles/page.css";
import Footer from "./Footer";
function Page(props) {
  // Add the content of your page here
  return (
    <body>
      {props.mainContent}
      <Footer/>
    </body>
    );
}

export default Page;
