import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for routing
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
    <div className="container">
      <h1>Courses</h1>
      <div className="courses-list">
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="course">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Price: ${course.price}</p>
              <img src={course.image} alt={course.title} />
              {/* View More Button */}
              <Link
                to={`/courses/${course.slug}`} // Updated Link to the frontend route
                className="btn btn-primary mt-3"
              >
                View More
              </Link>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
