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
    <div style={{float: 'center'}} class="social-container">
      <a
        href="https://www.linkedin.com/in/shawnfok/"
        className="linkedin social mr-1"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color='gray'/>
      </a>
      <a
        href="https://vimeo.com/user44481560"
        className="vimeo mr-1"
      >
        <FontAwesomeIcon icon={faVimeo} size="2x" color='gray' />
      </a>
      <a href="https://github.com/shawnfok" 
        className="github social mr-1"
        >
        <FontAwesomeIcon icon={faGithub} size="2x" color='gray' />
      </a>
      {/* <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color='gray'/>
      </a> */}
    </div>
  );
}
