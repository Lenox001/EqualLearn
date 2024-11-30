import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBook,
  faEnvelope,
  faUserCircle,
  faQuestionCircle,
  faSignOutAlt,
  faSignInAlt, // Import Login icon
  faUserPlus, // Import Signup icon
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand animated-brand" href="/">
          EquaLearn
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">
                <FontAwesomeIcon icon={faBook} /> Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </a>
            </li>

            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUserCircle} /> Account
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="accountDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/faqs">
                      FAQs <FontAwesomeIcon icon={faQuestionCircle} />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Logout <FontAwesomeIcon icon={faSignOutAlt} />
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </a>
              </li>
            )}

            {!isAuthenticated && (
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  <FontAwesomeIcon icon={faUserPlus} /> Signup
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
