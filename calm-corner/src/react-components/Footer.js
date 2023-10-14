import React from "react";
import "../assets/styles/Footer.css"


function Footer() {
    return (
            <div className="footer-container">
                <div className="footer-upper-text">
                    <p><a href="https://www.linkedin.com/company/100730187/" className="footer-link" target="_blank">Israeli High-Tech for Unity</a></p>
                    <p><a href="https://www.instagram.com/calmcornersite/" className="footer-link" target="_blank">©calmcorner</a></p>
                </div>
                <div className="footer-lower-text">
            <p>RAG הפונט באדיבות סטודיו</p>
                </div>
            </div>
    );
}

export default Footer;