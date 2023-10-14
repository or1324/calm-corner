import React from "react";
import Page from "./Page";
import NavigationBar from "./NavigationBar";
import "../assets/styles/NavPage.css";

function NavPage(props) {
    return (<Page><NavigationBar /><div id="content"><span id="title">{props.title}</span><br /><br /><span id="explaination">{props.explaination}</span><br /><br /><div id="mainContent">{props.children}</div></div></Page>);
}

export default NavPage;