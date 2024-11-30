import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./components/Courses"; // Import the Courses component
import Coursedetail from "./components/Coursedetail"; // Import the CourseDetail component
import Home from "./components/Home"; // Import the Home component
import Login from "./components/Login"; // Import the Login component
import Signup from "./components/Signup"; // Import the Signup component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/courses" element={<Courses />} />
        {/* Route for individual course details */}
        <Route path="/courses/:slug" element={<Coursedetail />} />
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
