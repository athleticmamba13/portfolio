import React from "react";
// import Typical from "react-typical";
// import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typewriter } from 'react-simple-typewriter'

export default function Profile() {
  return (
    <div className="profile-container">
      <Container> 
      <Row className="profile-parent">
        <Col className="profile-details">
          <div className="profile-details-name">
            <span className="h1-seo">
            <Typewriter
            words={["Hello, I'm Ben."]}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={60}
            delaySpeed={1}
            />
            </span>
          </div>
          <div className="fade-in-textprofile-details-role">
              {" "}
              <div className="typewriter-entry">
              <Typewriter
                words={["Serial Builder"]}
                loop={1}
                cursor
                cursorStyle=''
                typeSpeed={125}
                delaySpeed={75}
              />
              </div>
              <div className="typewriter-entry">
              <Typewriter
                words={["Brown University Computer Science Student 😎"]}
                loop={1}
                cursor
                cursorStyle=''
                typeSpeed={75}
                delaySpeed={100}
              />
              </div>
            <span className="profile-role-tagline">
              Check out my portfolio Button
            </span>
          </div>

          {/* <div className="profile-options">
            <button className="btn primary-btn"            > Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div> */}
        </Col>
        <Col>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </Col>
      </Row>
      </Container> 

    </div>
  );
}
