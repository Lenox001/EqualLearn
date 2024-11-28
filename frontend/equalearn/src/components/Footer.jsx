import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-2">
      <div className="container text-center">
        <h5 className="footer-heading mb-2">
          <span className="equa-text">EquaLearn</span>
        </h5>
        <div className="d-flex justify-content-center mb-2">
          <a
            href="https://facebook.com"
            className="social-icon text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a
            href="https://twitter.com"
            className="social-icon text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a
            href="https://instagram.com"
            className="social-icon text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <a
            href="https://linkedin.com"
            className="social-icon text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} EquaLearn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
