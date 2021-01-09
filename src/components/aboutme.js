import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import { Col, Row } from "react-bootstrap";
import SocialFollow from "./SocialFollow";
import ProfilePic from "../components/assets/shawnfok_profilepic.png";

export default class aboutme extends Component {
  render() {
    return (
      <Media>
        <Row>
          <Col md={4} xs={12} fluid>
            <Image
              width={380}
              height={350}
              className="ml-6 img"
              src={ProfilePic}
              alt="Generic placeholder"
              fluid
              thumbnail
            />
            <br />
            <SocialFollow />
          </Col>

          <Col md={8} xs={12}>
            <Media.Body className="text-aboutme">
              <h2>About me</h2>

              <p>
                I am a multimedia journalist based in Washington DC, United States.
                As a visual storyteller, I tell stories through text, images, sound, video, and graphics.
                I dive into video editing, graphics software, film production, audio engineering, (and now web design). 
                I continue advancing my ability to produce and deliver compelling content on digital and social media platforms.
              </p>
            
            </Media.Body>
          </Col>
        </Row>
      </Media>
    );
  }
}
