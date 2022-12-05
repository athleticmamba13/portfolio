import React from "react";
// import Typical from "react-typical";
// import ScrollService from "../../../utilities/ScrollService";
import Carousel from 'react-bootstrap/Carousel';
import "./Project.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import { Typewriter } from 'react-simple-typewriter'

export default function Project(props) {
  return (
    <div className="project-container">

        <Container>
        <p className="project-title">01 | Responsive Redesign</p>
        <Row className="row-project">
        {/* <span className="project-title">
                    <p>01 | Responsive Redesign</p>
                </span> */}
            <Col>

                <div className="profile-details-name">
                    {/* <span className="project-title ">
                        <p>01 | Responsive Redesign</p>
                    </span> */}
                    <p className="description-txt">{props.data.name}</p>
                    <p className="description-txt">{props.data.name}</p>
                    {/* <p className="description-txt">Objective: Redesign a website</p>
                    <p className="description-txt">Objective: Redesign a website</p>
                    <p className="description-txt">Tools Used: HTML, CSS, Bootstrap</p>
                    <p className="description-txt">Objective: Redesign a website</p> */}
                    <Button target="_blank" href={props.learnMoreLink} variant="outline-primary">📖 Learn More</Button>{' '}
                </div>

            </Col>
            <Col >
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/steph.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/steph.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/steph.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        </Container>
    </div>
  );
}
