/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserAccount.css";

const UserAccount = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    is_student: false,
    is_instructor: false,
  });
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch user data on load
    const token = localStorage.getItem("access_token"); // Get token from localStorage

    axios
      .get("http://localhost:8000/api/users/userdetails", {
        headers: { Authorization: `Bearer ${token}` }, // Send token in header
      })
      .then((response) => setUserData(response.data))
      .catch((error) => setErrorMessage("Failed to load user data."));
  }, []);

  const handleEditToggle = () => {
    setEditMode(!editMode);
    setUpdatedData(userData); // Pre-fill the form with existing data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSaveChanges = () => {
    const token = localStorage.getItem("access_token"); // Get token from localStorage

    axios
      .put("http://localhost:8000/api/users/update/", updatedData, {
        headers: { Authorization: `Bearer ${token}` }, // Send token in header
      })
      .then((response) => {
        setUserData(response.data);
        setEditMode(false);
        setSuccessMessage("Profile updated successfully.");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Failed to update profile.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="user-account-container">
      <h2>User Account</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {!editMode ? (
        <div>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Role:</strong>
            {userData.is_student && " Student"}
            {userData.is_instructor && " Instructor"}
          </p>
          <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
      ) : (
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={updatedData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Role:</label>
            <label>
              <input
                type="checkbox"
                name="is_student"
                checked={updatedData.is_student}
                onChange={(e) =>
                  setUpdatedData({
                    ...updatedData,
                    is_student: e.target.checked,
                  })
                }
              />
              Student
            </label>
            <label>
              <input
                type="checkbox"
                name="is_instructor"
                checked={updatedData.is_instructor}
                onChange={(e) =>
                  setUpdatedData({
                    ...updatedData,
                    is_instructor: e.target.checked,
                  })
                }
              />
              Instructor
            </label>
          </div>
          <button type="button" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button type="button" onClick={handleEditToggle}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default UserAccount;
