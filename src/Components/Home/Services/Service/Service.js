import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { id, name, post, Specialist, Institute, address, VisitingHour, contact, vistiPrice, img } = service;
    return (
      <div className="container ">

       
        <Col>
          <Card>
            <Card.Img variant="top" src={img} width="380px" height="380px" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <p> Post: {post}</p>
              <p> Specialist: {Specialist}</p>
              <p> Institute: {Institute}</p>
              <p> Visiting Hour: {VisitingHour}</p>
              <p> Visti-Price: {vistiPrice}</p>
              <p> Address: {address}</p>
              <p> Contact: {contact}</p>
              <button className="btn btn-warning mt-2">
                About Droctor
              </button>
              <br />
              <Link to={`/aboutdr/${id}`}>
                <Button variant="btn btn-warning mt-2">
                  Appointment Now {name}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Service;