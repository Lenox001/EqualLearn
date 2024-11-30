/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "../styles/Login.css"; // Import the unique styles for this component
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/token/",
        {
          username,
          password,
        }
      );
      localStorage.setItem("access_token", response.data.access_token);
      setMessage("Login successful!");
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      setMessage("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-field">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            className="login-input"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-field">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            className="login-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
}

export default Login;
