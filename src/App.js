import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ReviewForm from "./Components/ReviewForm/ReviewForm.js";
import NavbarForm from "./Components/Navbar/Navbar.js";
import VerticalWrapper from "./Components/wrapper/VerticalWrapper.js";
import Appointment from "./Components/Appointment/Appointment.js";
function App() {
  return (
    <Router>
      <VerticalWrapper>
        <NavbarForm />

        <Routes>
          <Route exact path="/Appointment" element={<Appointment />} />
          <Route exact path="/reviews" element={<ReviewForm />} />
        </Routes>
      </VerticalWrapper>
    </Router>
  );
}

export default App;
