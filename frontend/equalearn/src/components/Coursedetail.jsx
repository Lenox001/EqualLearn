import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Get the course slug from URL
import "../styles/Details.css"; 

const Coursedetail = () => {
  const { slug } = useParams(); // Get slug from URL parameter
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Check if the slug is being passed correctly
    console.log("Slug:", slug);

    // Fetch course details by slug
    axios
      .get(`http://localhost:8000/api/courses/${slug}/`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course details", error);
      });
  }, [slug]);

  return (
    <div className="container">
      {course ? (
        <div>
          <h1>{course.title}</h1>
          <img src={course.image} alt={course.title} />
          <p>{course.description}</p>
          <p>Price: ${course.price}</p>
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
};

export default Coursedetail;
