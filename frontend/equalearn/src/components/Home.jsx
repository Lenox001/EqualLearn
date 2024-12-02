import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [count, setCount] = useState({
    courses: 0,
    students: 0,
    instructors: 0,
  });

  const countUp = (target, setTarget, speed) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < target) {
        current += 1;
        setTarget(current);
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  useEffect(() => {
    countUp(
      100,
      (value) => setCount((prev) => ({ ...prev, courses: value })),
      30
    );
    countUp(
      550,
      (value) => setCount((prev) => ({ ...prev, students: value })),
      10
    );
    countUp(
      50,
      (value) => setCount((prev) => ({ ...prev, instructors: value })),
      50
    );
  }, []);

  return (
    <div className="home-page container">
      <header className="home-header text-center">
        <h1 className="home-header-title">Welcome to EquaLearn</h1>
        <p className="home-header-subtitle">
          Your go-to platform for learning new skills and advancing your career.
        </p>
      </header>

      <section className="home-description text-center">
        <h2 className="home-description-title">Explore Our Courses</h2>
        <p className="home-description-text">
          Dive into a variety of courses tailored to help you grow. Whether you
          are into programming, design, marketing, or anything in between, we
          have something for you!
        </p>
        <Link
          to="/courses"
          className="home-description-button btn btn-primary mt-3 btn-hovered"
        >
          Explore Courses
        </Link>
      </section>

      <section className="home-stats text-center mt-5">
        <div className="stat-item">
          <h3 className="stat-item-number">{count.courses}+</h3>
          <p className="stat-item-label">Courses Available</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-item-number">{count.students}+</h3>
          <p className="stat-item-label">Students Enrolled</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-item-number">{count.instructors}+</h3>
          <p className="stat-item-label">Expert Instructors</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
