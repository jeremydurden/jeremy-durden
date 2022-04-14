import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="mailto:jeremydurden@gmail.com"
        className="footer__link"
        target="_blank"
        rel="noreferrer"
      >
        jeremydurden@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/jeremydurden/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/jeremydurden"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.instagram.com/jeremydurden/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
