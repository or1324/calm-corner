import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./react-components/HomePage";
import ReportPage from "./react-components/ReportPage";
import Section from "./react-components/Section";
import FirstAidPage from "./react-components/FirstAidPage";
import HomeNavigation from './react-components/HomeNavigation';
import logo from "./assets/icons/logo.png";
import Footer from "./react-components/Footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/מוקדי-תמיכה" element={<div></div>} />
          <Route path="/שיטות-הרגעה" element={<div></div>} />
          <Route path="/סיפורים-אישיים" element={<div></div>} />
          <Route path="/דיווחים-מהשטח" element={<ReportPage />} />
          <Route path="/עזרה-ראשונה" element={<FirstAidPage/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
    
  );
}
export default App;
