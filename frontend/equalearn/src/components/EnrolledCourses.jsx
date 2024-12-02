import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EnrolledCourses.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          "http://localhost:8000/api/courses/enrolled/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEnrolledCourses(response.data);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="enrolled-courses-container">
      <h1>Your Enrolled Courses</h1>
      <div className="enrolled-courses-list">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((enrollment) => (
            <div className="enrolled-course-card" key={enrollment.course_title}>
              <h2>{enrollment.course_title}</h2>
              <div className="enrolled-course-image">
                <img
                  src={enrollment.course_image} // Make sure this data is available from the backend
                  alt={enrollment.course_title}
                  className="course-image"
                />
              </div>
              <p>{enrollment.course_description}</p>
              <p>Price: ${enrollment.course_price}</p>
              <p>
                Enrolled on:{" "}
                {new Date(enrollment.date_enrolled).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>You are not enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;
