import logo from "./logo.svg";
import "./assets/styles/App.css";
import Footer from "./react-components/Footer";
import Form from "./react-components/Form.js";
function App() {
  return (
    <div className="App">
      <Form
        title="הוספת דיווח"
        showDropdown={true}
        detailsPlaceHolder="פרטי הדיווח"
        buttonTitle="הוסיפו דיווח"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
function handleSubmit(data) {
  // submission handling logic here
  console.log("Form submitted with data:", data);
}

export default App;
