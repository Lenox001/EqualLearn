import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Details.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Coursedetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  // Function to refresh the token
  const refreshToken = () => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      alert("Session expired. Please log in again.");
      navigate("/login");
      return;
    }

    axios
      .post("http://localhost:8000/api/token/refresh/", {
        refresh: refreshToken,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
      })
      .catch(() => {
        alert("Session expired. Please log in again.");
        navigate("/login");
      });
  };

  // Enroll in course API call
  const enrollInCourse = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("You need to be logged in to enroll.");
      return;
    }

    axios
      .post(
        `http://localhost:8000/api/courses/${slug}/enroll/`,
        {},
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        alert("Successfully enrolled in the course!");
        navigate("/courses/enrolled");
      })
      .catch((error) => {
        console.error("Error enrolling in course:", error.response || error);
        const status = error.response ? error.response.status : null;
        if (status === 401) {
          refreshToken();
        } else {
          alert("An error occurred. Please try again.");
        }
      });
  };

  // Fetch course details from the backend
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses/${slug}/`)
      .then((response) => setCourse(response.data))
      .catch((error) => console.error("Error fetching course details", error));
  }, [slug]);

  return (
    <div className="coursedetail-container">
      {course ? (
        <div className="coursedetail-card">
          <h1 className="coursedetail-title">{course.title}</h1>
          <div className="coursedetail-image-container">
            <img
              src={course.image}
              alt={course.title}
              className="coursedetail-image"
            />
          </div>
          <p className="coursedetail-description">{course.description}</p>
          <p className="coursedetail-price">Price: ${course.price}</p>
          <button className="coursedetail-button" onClick={enrollInCourse}>
            Enroll Now
          </button>
        </div>
      ) : (
        <p className="coursedetail-loading">Loading course details...</p>
      )}
    </div>
  );
};

export default Coursedetail;
