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
        <p className="project-title">{props.data.title}</p>
        <Row className="row-project">
        {/* <span className="project-title">
                    <p>01 | Responsive Redesign</p>
                </span> */}
            <Col sm={12} md={12} lg={6}>

                <div className="profile-details-name">
                    <p className="objective-txt">{props.data.objective}</p>
                    <p className="description-txt">{props.data.description}</p>
                    <Button target="_blank" href={props.data.learnMoreLink} variant="outline-primary">📖 Learn More</Button>{' '}
                </div>

            </Col>
            <Col sm={12} md={12} lg={6} className="center">
                <Carousel className="center carousel-style" variant="dark">
                {props.data.carousels.map((carouselItem) => ( // TODO: map bakeryData to BakeryItem components
                    <Carousel.Item bg="dark">
                        <img
                        className="d-block img-config"
                        src={carouselItem[0]}
                        alt="First slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3 className="carousel-text">{carouselItem[1]}</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                     </Carousel.Item>
                                     
                ))}
                </Carousel>
            </Col>
        </Row>
        </Container>
    </div>
  );
}
