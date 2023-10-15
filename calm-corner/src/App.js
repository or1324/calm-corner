import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./react-components/HomePage";
import ReportPage from "./react-components/ReportPage";
import Section from "./react-components/Section";import HomeNavigation from './components/HomeNavigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HomeNavigation></HomeNavigation>
      </header>
      <Footer></Footer>
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
