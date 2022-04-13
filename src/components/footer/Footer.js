import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="mailto:jeremydurden@gmail.com"
        class="footer__link"
        target="_blank"
        rel="noreferrer"
      >
        jeremydurden@gmail.com
      </a>
      <ul class="social-list">
        <li class="social-list__item">
          <a
            class="social-list__link"
            href="https://www.linkedin.com/in/jeremydurden/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link"
            href="https://github.com/jeremydurden"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link"
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
