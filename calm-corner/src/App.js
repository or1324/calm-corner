import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./react-components/HomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/מוקדי-תמיכה" element={<div></div>} />
            <Route path='/שיטות-הרגעה' element={<div></div>} />
            <Route path='/סיפורים-אישיים' element={<div></div>} />
            <Route path='/דיווחים-מהשטח' element={<div></div>} />
            <Route path='/הגנה-עצמית' element={<div></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
