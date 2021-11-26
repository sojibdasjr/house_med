import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div class="bg-dark">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">
              <div className="nav-link">
                <h1>Section</h1>
              <Link to ="#">Homes</Link>
              <Link to ="#">Features</Link>
              <Link to ="#">Pricing</Link>
              <Link to ="#">FAQs</Link>
              <Link to ="#">About Us</Link>
              </div>
          </div>
          <div class="col">
              <div className="nav-link">
                <h1>RECENT BLOG</h1>
              <Link to ="#">YouTube</Link>
              <Link to ="#">Facebook</Link>
              <Link to ="#">Instragram</Link>
              <Link to ="#">Twitter</Link>
              <Link to ="#">TikTok</Link>
              </div>
          </div>
          <div class="col">
              <div className="nav-link">
                <h3>NEWSLETTER</h3>
              <h5>SUBMIT Email</h5>
          <Form.Control className="w-50 m-1  mx-auto" type="text" placeholder="Email" /> 
          <button className="btn-style">SEND</button>
              </div>
          </div>
         
          <div class="col">
              <div className="nav-link">
                <h1>RECENT BLOG</h1>
              <Link to ="#">YouTube</Link>
              <Link to ="#">Facebook</Link>
              <Link to ="#">Instragram</Link>
              <Link to ="#">Twitter</Link>
              <Link to ="#">TikTok</Link>
              </div>
          </div>
        </div>
        <small className="text-light">Copyright 2018@ WELCOME TO  <span style={{ color: "orange" }}> HOUSE MED</span>. All right reserved.</small>
      </div>
      
    );
};

export default Footer;