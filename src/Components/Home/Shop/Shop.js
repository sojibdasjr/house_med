import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Shop = () => {
    return (
        <div className="container">
            <h1 className="text-center text-warning">Our Shop</h1>
            <Row xs={1} md={2}  className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/HxyL3Gf/Blue-Microscope.jpg" />
        <Card.Body>
          <Card.Title>Blue-Microscope</Card.Title>
          <Card.Text>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis ante.
          </Card.Text>
          <button className="btn btn-warning">Buy Now</button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/8xdGNjb/Blue-Thermometer.jpg" />
        <Card.Body>
          <Card.Title>Blue-Thermometer</Card.Title>
          <Card.Text>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis ante.
          </Card.Text>
          <button className="btn btn-warning">Buy Now</button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/tZZ8qpk/Dental-Model.jpg" />
        <Card.Body>
          <Card.Title>Dental-Model</Card.Title>
          <Card.Text>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis ante.
          </Card.Text>
          <button className="btn btn-warning">Buy Now</button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/PQdnChh/Medical-Gloves.jpg" />
        <Card.Body>
          <Card.Title>Medical-Gloves</Card.Title>
          <Card.Text>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis ante.
          </Card.Text>
          <button className="btn btn-warning">Buy Now</button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/GnyVDff/Stethoscope-Set.jpg" />
        <Card.Body>
          <Card.Title>Stethoscope-Set</Card.Title>
          <Card.Text>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis ante.
          </Card.Text>
          <button className="btn btn-warning">Buy Now</button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/1nfs30x/Surgical-Mask.jpg" />
        <Card.Body>
          <Card.Title>Surgical-Mask</Card.Title>
          <Card.Text>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis ante.
          </Card.Text>
          <button className="btn btn-warning">Buy Now</button>
        </Card.Body>
      </Card>
    
    </Col>
  ))}
</Row>
        </div>
    );
};

export default Shop;