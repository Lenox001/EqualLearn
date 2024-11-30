 
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Details.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Coursedetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  const enrollInCourse = () => {
    axios
      .post(
        `http://localhost:8000/api/courses/${slug}/enroll/`,
        {},
        { withCredentials: true }
      )
      .then(() => alert("Successfully enrolled in the course!"))
      .catch((error) => {
        console.error("Error enrolling in course:", error);
        alert("Error enrolling in course. Please make sure you're logged in.");
      });
  };

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
