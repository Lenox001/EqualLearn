import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/courses/")
      .then((response) => {
        const courseData = Array.isArray(response.data)
          ? response.data
          : response.data.courses || [];
        setCourses(courseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  return (
    <div className="courses-container">
      <h1 className="courses-header">Courses</h1>
      <div className="courses-list">
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-price">Price: ${course.price}</p>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <Link
                to={`/courses/${course.slug}`}
                className="course-view-more btn btn-primary mt-3"
              >
                View More
              </Link>
            </div>
          ))
        ) : (
          <p className="no-courses-text">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
