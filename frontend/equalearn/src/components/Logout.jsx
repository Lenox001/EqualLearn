/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("access_token");

    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <h3>Logging out...</h3>
    </div>
  );
};

export default Logout;
