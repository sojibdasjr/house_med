import React from "react";
import { Card, CardGroup, Carousel, Row } from "react-bootstrap";
import "./Home.css";
import img1 from "../../../Images/banner img/1.jpg";
import img2 from "../../../Images/banner img/2.jpg";
import img3 from "../../../Images/banner img/3.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3 style={{ color: "orange" }}>
              Mymensingh Medical College Hospital Doctor List Contact
            </h3>
            <p>
              Hospitals have long existed in most countries. Developing
              countries, which contain a large proportion of the world’s
              population, generally do not have enough hospitals, equipment, and
              trained staff to handle the volume of persons who need care. Thus,
              people in these countries do not always receive the benefits of
              modern
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={{ color: "orange" }}>
              Doctor List of Mymensingh Medical College Hospital
            </h3>
            <p>
              Hospitals have long existed in most countries. Developing
              countries, which contain a large proportion of the world’s
              population, generally do not have enough hospitals, equipment, and
              trained staff to handle the volume of persons who need care. Thus,
              people in these countries do not always receive the benefits of
              modern
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={{ color: "orange" }}>
              MBBS, BCS (Health), FCPS (Surgery), FISCP (India), MS (Colorectal
              Surgery)
            </h3>
            <p>
              Hospitals have long existed in most countries. Developing
              countries, which contain a large proportion of the world’s
              population, generally do not have enough hospitals, equipment, and
              trained staff to handle the volume of persons who need care. Thus,
              people in these countries do not always receive the benefits of
              modern
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <h1 className="text-center text-primary my-5">
          Highly Skilled <span style={{ color: "orange" }}>Optometrists</span>{" "}
        </h1>
        <div className="second-div">
          <div>
            <img src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h4-img-1.png" alt="" />
          </div>
          <div className="mt-5">
            <h1>Have you been thinking about trying out new contact lenses?</h1>
            <p>
              Ut wisi enim ad minim veniam, quis laore est usus legentis in iis
              qui facit eorum nostrud exerci tation ulm hedi corper turet
              suscipit lobortis nisl aliquip erat volutpat autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
        </div>
        <div className="second-div">
          <div className="mt-5">
            <h1>Not just better care, but
a better care experience</h1>
            <p>
            Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
          <div>
            <img src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h4-img-2.png" alt="" />
          </div>
        </div>
        <div className="second-div">
          <div>
            <img src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h4-img-4.png" alt="" />
          </div>
          <div className="mt-5">
            <h1>Health services are becoming
more and more important</h1>
            <p>
              Ut wisi enim ad minim veniam, quis laore est usus legentis in iis
              qui facit eorum nostrud exerci tation ulm hedi corper turet
              suscipit lobortis nisl aliquip erat volutpat autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
        </div>
        <div className="second-div">
          <div className="mt-5">
            <h1>Ophthalmologists offer
a comprehensive approach</h1>
            <p>
              Ut wisi enim ad minim veniam, quis laore est usus legentis in iis
              qui facit eorum nostrud exerci tation ulm hedi corper turet
              suscipit lobortis nisl aliquip erat volutpat autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
          <div>
            <img src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h4-img-3-1.png" alt="" />
          </div>
        </div>
        <div className="second-div">
          <div>
            <img src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h4-img-5-1.png" alt="" />
          </div>
          <div className="mt-5">
            <h1>Laboratory place
in medicine practice</h1>
            <p>
              Ut wisi enim ad minim veniam, quis laore est usus legentis in iis
              qui facit eorum nostrud exerci tation ulm hedi corper turet
              suscipit lobortis nisl aliquip erat volutpat autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
        </div>
      </div>

      <div className="container">
     
      <CardGroup  xs={1} md={2} lg={3} className="g-4 my-5">
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/MBn7P5c/1.jpg" />
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/V9nyb7K/3.jpg" />
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/V36g0Y6/2.jpg" />
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/P5F0tZy/7.jpg" />
   
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/qxdKsw8/6.jpg" />
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/Hrgs9nj/5.jpg" />
   
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/nbjmfYk/8.jpg" />
  </Card>
</CardGroup>

      </div>

    </div>

    
  );
};

export default Home;
