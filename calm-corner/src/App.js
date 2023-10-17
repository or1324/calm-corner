import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./react-components/HomePage";
import ReportPage from "./react-components/ReportPage";
import SupportPage from "./react-components/SupportPage";
import FirstAidPage from "./react-components/FirstAidPage";
import Footer from "./react-components/Footer";
import CalmingPage from "./react-components/CalmingPage";
import StoryPage from "./react-components/StoryPage";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/מוקדי-תמיכה" element={<SupportPage />} />
          <Route path="/שיטות-הרגעה" element={<CalmingPage/>} />
          <Route path="/סיפורים-אישיים" element={<StoryPage />} />
          <Route path="/דיווחים-מהשטח" element={<ReportPage />} />
          <Route path="/עזרה-ראשונה" element={<FirstAidPage/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
    
  );
}
export default App;
