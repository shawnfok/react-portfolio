import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faVimeo,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div style={{float: 'left'}} class="social-container">
      <a
        href="https://www.linkedin.com/in/shawnfok/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color='gray'/>
      </a>
      <a
        href="https://vimeo.com/user44481560"
        className="vimeo"
      >
        <FontAwesomeIcon icon={faVimeo} size="2x" color='gray' />
      </a>
      <a href="https://github.com/shawnfok" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" color='gray' />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color='gray'/>
      </a>
    </div>
  );
}
