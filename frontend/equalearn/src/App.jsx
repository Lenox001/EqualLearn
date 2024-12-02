/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import Coursedetail from "./components/Coursedetail";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Contact from "./components/Contact"; // Import the Contact component
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContent"; // Import AuthProvider
import EnrolledCourses from "./components/EnrolledCourses";
import UserAccount from "./components/UserAccount";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/courses"
            element={<ProtectedRoute element={<Courses />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<UserAccount />} />}
          />
          <Route path="/courses/enrolled" element={<EnrolledCourses />} />
          <Route
            path="/courses/:slug"
            element={<ProtectedRoute element={<Coursedetail />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Add Contact route */}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
