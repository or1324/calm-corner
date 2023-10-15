import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./react-components/HomePage";
import ReportPage from "./react-components/ReportPage";
import Section from "./react-components/Section";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/מוקדי-תמיכה" element={<div></div>} />
          <Route path="/שיטות-הרגעה" element={<div></div>} />
          <Route path="/סיפורים-אישיים" element={<div></div>} />
          <Route path="/דיווחים-מהשטח" element={<ReportPage />} />
          <Route path="/עזרה-ראשונה" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
