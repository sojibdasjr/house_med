import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './About.css'
const About = () => {
  return (
    <div
      className="my-5 py-5 about-body"
    >
      <Container>
        
          <h2 className="text-center text-white mb-4 py-5">
            WELCOME TO  <span style={{ color: "orange" }}> HOUSE MED</span>
          </h2>
       
        <Row>
          <Col md className="pe-3">
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
                There are countless online education marketplaces on the
                internet. And there’s us. We are not the biggest. We are not the
                cheapest. But we are the fastest growing. We have the highest
                course completion rate in the industry.
              </p>
              <p className="text-muted">
                And the reason is, we don’t give up. When a student commits to a
                course, we commit to the student. We are not going to sugar coat
                it - we will make you complete, come what may. You may not have
                given much thought to what you are signing up for, but we
                believe you are signing up for knowledge that is useful and
                complete. We are ridiculously committed to our students. Be it
                constant reminders, relentless masters or 24 x 7 online support
                - we will absolutely make sure that you run out of excuses to
                not complete the course.
              </p>
            
          </Col>
          <Col md className="pe-3">
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                To become the largest online learning ecosystem for continuing
                education, in partnership with corporates and academia.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
                To create an alternate platform for students who wish to
                continue and complete courses by attending live online courses,
                using a team of ridiculously committed educators who will stop
                at nothing to impart education, helped by a 24 x 7 support
                system. By deploying our world class team of industry experts,
                we aim to educate our learners with the skills they need to
                advance their professional life to the next level.
              </p>
            
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
          
          </Col>
          <Col md className="d-flex align-items-center">
            
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;