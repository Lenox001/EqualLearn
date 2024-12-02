/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContent";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext); // Access login from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/token/",
        { username, password }
      );
      const token = response.data.access_token;
      login(token); // Update context and localStorage
      setMessage("Login successful!");
      navigate("/"); // Redirect to home
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
